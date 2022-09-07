import Hero from 'components/Hero.js'
import React from 'react'
import Layout from 'common/Layout'
import Select from 'common/Select/sel-ect'
import Image from 'next/image'
import prisma from 'lib/prisma'
import CardContainer from 'components/CardContainer/card-container'

const Istanbul = ({ houses }) => {
  return (
    <>
      <Hero caption={'Istanbul'} main={false} />
      <Intro />
      <Select />
      <CardContainer houses={houses}/>

    </>
  )
}

export default Istanbul


Istanbul.getLayout = (page) => {
  return <Layout title={'404'}>{page}</Layout>
}



const Intro = () => {

  return (
    <div className='flex w-full justify-center py-[2rem] text-sm small:text-base px-[1rem] small:px-[11rem] text-center'>
      <h1 className={`futuraMedium to-base-content`}>
        Attila Homes; Türkiye ve Almanyada faaliyet gösteren, gayrimenkul alanında hayalinizdeki evi bulmanızı ve en iyi yatırımı yapmanızı sağlayan uzman bir şirkettir. Kaliteli yaşam ve kazandıran yatırım için hemen bizimle iletişime geçin.
      </h1>
    </div>
  )
}




export async function getServerSideProps(context) {


  let tweets = await prisma.Houses.findMany()
  tweets = JSON.parse(JSON.stringify(tweets))


  return {
    props: { houses: tweets }
  };
}