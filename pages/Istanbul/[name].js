import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from 'common/Layout'
import { getHouse } from 'lib/data/getHousePhotos'
import HouseDetail from 'components/HouseDetail/house-detail'
import HouseDescription from 'components/HouseDetail/house-desc'
import Maps from 'components/HouseDetail/maps.tsx'


const Index = ({ house }) => {
  const arr = house.description && house.description.split(/<br \/>/)
  const resultArr = [];
  React.useMemo(() => arr?.forEach((item, i) => {
    if (i % 2 === 0) resultArr.push(<br />);
    resultArr.push(item);
  }))
  return (
    <>

      <HouseDetail house={house} />
      <HouseDescription house={house} resultArr={resultArr} />
      <Maps />
    </>
  )
}

export default Index

Index.getLayout = (page) => {
  return <Layout title={'Attila-Homes'}>{page}</Layout>
}


export async function getServerSideProps(context) {

  const session = await getHouse(context.params.name, prisma)
  const house = JSON.parse(JSON.stringify(session))
  return {
    props: {
      house
    }
  }
}