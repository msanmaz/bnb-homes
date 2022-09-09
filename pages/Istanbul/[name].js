import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from 'common/Layout'


const Index = ({house}) => {

  return (
    <div>{house.caption}</div>
  )
}

export default Index

Index.getLayout = (page) => {
  return <Layout title={'Attila-Homes'}>{page}</Layout>
}


export async function getServerSideProps(context) {
  const session = await prisma.Houses.findUnique({
    where:{
      caption:context.params.name
    }
  });
  const house = JSON.parse(JSON.stringify(session))
  return {
      props: {
        house
      }
  }
}