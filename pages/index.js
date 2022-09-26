import Hero from 'components/Hero/index.js'
import Head from 'next/head'
import Nav from 'components/Navbar/nav-bar'
import LocationCardContainer from 'components/LocationCard'
import MessageBubble from 'common/icons/message-bubble'
import { useContext } from 'react'
import { DarkModeContext } from "lib/context/darkModeContext"
import Comfort from 'common/icons/comfort'
import Care from 'common/icons/care'
import Invest from 'common/icons/invest'
import Shield from 'common/icons/shield'
import Layout from 'common/Layout'
import Meta from 'components/Meta'

export default function Home() {
  const { isDark } = useContext(DarkModeContext)

  return (
    <>
    <Meta/>
      <Hero main={true} />
      <Intro isDark={isDark} />
      <LocationCardContainer />
      <Policy isDark={isDark} />

    </>
  )
}


Home.getLayout = (page) => {
  return <Layout title={'Attila-Homes'}>{page}</Layout>
}






const Intro = () => {
  return (
    <div className='flex w-full justify-center py-[2rem] text-sm small:text-base px-[1rem] small:px-[11rem] text-center'>
      <h1 className={`futuraMedium to-base-content`}>
      Attila Homes; is an expert company operating in Turkey and Germany, enabling you to find your dream home and make the best investment in the field of real estate. Contact us now for quality life and profitable investment.      </h1>
    </div>
  )
}


const Policy = ({ isDark }) => {
  const policies = [{ name: 'Comfort', desc: 'Our aim is to make you comfortable in your living space. As Attila Homes, we carefully select the properties in our portfolio and present them to your liking.', logo: <Comfort isDark={isDark} size={80} /> },
  { name: 'Interest', desc: 'With our experience in the field of real estate, we help you to eliminate all the question marks that may arise in your decision-making process.', logo: <Care isDark={isDark} size={80} /> },
  { name: 'Invest', desc: 'Real estate is one of the most valuable investment tools. With the experience and assurance of Attila Homes, we enable you to evaluate your investments in the most accurate way.', logo: <Invest isDark={isDark} size={80} /> },
  { name: 'Trust', desc: 'We base our business partnership on trust with our portfolio consisting of the Utkucan family and close friends.', logo: <Shield size={80} isDark={isDark} /> },
  { name: 'Communication', desc: 'Your thoughts and problems about your dreamed living space are very important to us. As Attila Homes, we are in contact with you at every moment of the process.', logo: <MessageBubble isDark={isDark} size={80} /> }]

  return (
    <>
      <div className='flex py-[3rem] items-center justify-center w-full small:flex-row'>
        <div className={`w-[40%] ml-[1rem] md:ml-0 border-t border-gray-300`}></div>
        <div className='bebasBold text-xl md:text-2xl px-[1rem] md:px-[3rem]'>Our Policy</div>
        <div className={`w-[40%] mr-[1rem] md:mr-0 border-t border-gray-300 `}></div>
      </div>

      <div className='flex w-full justify-center flex-wrap pb-[2rem] md:pb-[6rem]'>
        {policies.map((items) => {
          return (

            <div key={items.name} className='md:w-[20%] w-[45%] py-[1rem] md:py-0 px-[1rem] md:px-[2rem] flex-col flex-wrap flex text-center'>
              <div className='flex justify-center'>
                {items.logo}
              </div>
              <h1 className='bebasBold py-[0.5rem]'>{items.name}</h1>
              <p className="md:text-sm text-xs futuraMedium">{items.desc}</p>

            </div>


          )
        })}

      </div>

    </>
  )
}