import Hero from 'components/Hero.js'
import React from 'react'
import Layout from 'common/Layout'
import Select from 'common/Select/sel-ect'
import Image from 'next/image'
import prisma from 'lib/prisma'

const Istanbul = ({houses}) => {
  return (
    <>
        <Hero caption={'Istanbul'} main={false}/>
        <Intro/>
        <Select/>
        {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://firebasestorage.googleapis.com/v0/b/attilahomes-fd321.appspot.com/o/Compressed_and_resized_Adakale.jpg?alt=media&token=c01d2646-25dd-4841-ba98-bf2012e9bae3" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title w-1/4 text-xs bg-[#161616] text-white justify-center py-2 uppercase hover:bg-white hover:text-black transition ease-in-out duration-500">Satilik!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
<div className='flex flex-wrap'>

<div  className="w-full  md:w-1/2 lg:w-1/3 px-1 my-1 cursor-pointer">
                            <div className="relative">
                                <Image layout='responsive' width={600} height={400} className="opacity-70 absolute hover:opacity-100 object-cover" src='https://firebasestorage.googleapis.com/v0/b/attilahomes-fd321.appspot.com/o/Compressed_and_resized_Adakale.jpg?alt=media&token=c01d2646-25dd-4841-ba98-bf2012e9bae3'
                                    alt="Profile picture" />

                                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                                    <a href="#" className="text-xs bg-[#161616] text-white px-5 py-2 uppercase hover:bg-white hover:text-black transition ease-in-out duration-500">Satilik</a>

                                </div>
                                <div className="flex absolute bottom-0 flex-row justify-between z-10">
                                    <a href="#" className="text-md tracking-tight pl-[1.25rem] font-black leading-7 font-regular text-white hover:underline">New Home
                                    </a>
                                    <div className="text-white font-black pl-[14rem]">
                                        <span className="text-md font-black">100,000$</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        { !houses.length? <div></div>: houses.map((item)=> {
                            return(
                              <div key={item.id} className="w-full  md:w-1/2 lg:w-1/3 px-1 my-1 cursor-pointer">
                            <div className="relative">
                                <Image layout='responsive' width={600} height={400} className="opacity-70 absolute hover:opacity-100 object-cover" src={item.image}
                                    alt="Profile picture" />

                                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                                    <a href="#" className="text-xs bg-[#161616] text-white px-5 py-2 uppercase hover:bg-white hover:text-black transition ease-in-out duration-500">{item.type}</a>

                                </div>
                                <div className="flex absolute bottom-0 flex-row justify-between z-10">
                                    <a href="#" className="text-md tracking-tight pl-[1.25rem] font-black leading-7 font-regular text-white hover:underline">{item.caption}
                                    </a>
                                    <div className="text-white font-black pl-[14rem]">
                                        <span className="text-md font-black">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                            )
                          }) 
                        }

  
</div>

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
    props: { houses:tweets }
  };
}