import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from 'common/Layout'
import { getHouse } from 'lib/data/getHousePhotos'
import Gallery from 'common/ImageGallery/image-gallery'
import HouseDetail from 'components/HouseDetail/house-detail'


const Index = ({house}) => {
  return (
<>

<HouseDetail house={house}/>

 </>
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