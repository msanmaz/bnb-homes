import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from 'common/Layout'
import { getHouse } from 'lib/data/getHousePhotos'


const Index = ({house}) => {
  console.log(house)
  return (
    <div>{house.caption}</div>
  )
}

export default Index

Index.getLayout = (page) => {
  return <Layout title={'Attila-Homes'}>{page}</Layout>
}


export async function getServerSideProps(context) {
 
  const session = await  getHouse(context.params.name,prisma)
  const house = JSON.parse(JSON.stringify(session))
  return {
      props: {
        house
      }
  }
}