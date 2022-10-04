import Hero from 'components/Hero/index.js'
import React, { useEffect } from 'react'
import Layout from 'common/Layout'
import Select from 'common/Select/sel-ect'
import prisma from 'lib/prisma'
import CardContainer from 'components/CardContainer/card-container'
import { getBodrum, getHouses } from 'lib/data/getHousePhotos'
import Meta from 'components/Meta'


const Istanbul = ({ houses }) => {

  return (
    <>
    <Meta title={'Bodrum | ATTILA HOMES'}/>
      <Hero caption={'Bodrum'} main={false} />
      <Intro />
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
      Attila Homes; It is an expert company operating in Turkey and Germany, enabling you to find your dream home and make the best investment in the field of real estate. Contact us now for quality life and profitable investment.
      </h1>
    </div>
  )
}




export async function getServerSideProps() {
  let houses = await getBodrum(prisma)
  houses = JSON.parse(JSON.stringify(houses))


  return {
    props: { houses: houses }
  };
}