import prisma from 'lib/prisma'
import { useRouter } from 'next/router'
import React from 'react'


const Index = ({session}) => {


  return (
    <div>{session.caption}</div>
  )
}

export default Index

export async function getServerSideProps(context) {
  console.log(context)
  const session = await prisma.Houses.findUnique({
    where:{
      caption:context.params.name
    }
  });

  return {
      props: {
        session
      }
  }
}