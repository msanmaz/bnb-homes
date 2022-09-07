import Hero from 'components/Hero.js'
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

export default function Home() {
  const { isDark } = useContext(DarkModeContext)

  return (
    <>
      <Head>
        <title>Bnb Estate</title>
      </Head>

      <Hero main={true} />
      <Intro isDark={isDark} />
      <LocationCardContainer />
      <Policy  isDark={isDark}/>

    </>
  )
}


Home.getLayout = (page) => {
  return <Layout title={'404'}>{page}</Layout>
}

  




const Intro = ({ isDark }) => {
  console.log(isDark,'in intor')
  return (
    <div className='flex w-full justify-center py-[2rem] text-sm small:text-base px-[1rem] small:px-[11rem] text-center'>
      <h1 className={`futuraMedium to-base-content`}>
        Attila Homes; Türkiye ve Almanyada faaliyet gösteren, gayrimenkul alanında hayalinizdeki evi bulmanızı ve en iyi yatırımı yapmanızı sağlayan uzman bir şirkettir. Kaliteli yaşam ve kazandıran yatırım için hemen bizimle iletişime geçin.
      </h1>
    </div>
  )
}


const Policy = ({isDark}) => {
  const policies = [{ name: 'konfor', desc: 'Amacimiz yasam alaninizda rahat etmeniz.Attila Homes olarak portfoyumuzdeki gayrimenkulleri ozenle seciyoruz ve begeninize sunuyoruz', logo: <Comfort  isDark={isDark} size={80} /> },
  { name: 'Ilgi', desc: 'Gayrimenkul alanında ki tecrübemizle birlikte karar verme sürenicizde oluşabılecek bütün soru işaretlerini gidermenizde yardımcı oluyoruz.', logo: <Care  isDark={isDark} size={80} /> },
  { name: 'Yatırım', desc: 'Gayrimenkul en kıymetli yatırım araçlarından biridir. Attıla Homes tecrübesi ve güvencesiyle yatırımlarınızı en doğru şekilde değerlendirmenizi sağlıyoruz.', logo: <Invest  isDark={isDark} size={80} /> },
  { name: 'Guven', desc: 'Utkucan ailesi ve yakın dostlarından oluşan portföyümüzle iş ortaklığımızı güven üzerine temellendiriyoruz.', logo: <Shield size={80} isDark={isDark} /> },
  { name: 'Iletisim', desc: 'Hayal ettiğiniz yaşam alanınıza dair düşünceleriniz ve sorunlarınız bizim için çok önemli.Attıla Homes olarak sürecin her anında sizinle iletişim halindeyiz.', logo: <MessageBubble  isDark={isDark} size={80} /> },


  ]
  return (
    <>
      <div className='flex py-[3rem] items-center justify-center w-full small:flex-row'>
        <div className={`w-[40%] border-t border-gray-300`}></div>
        <div className='bebasBold text-xl md:text-2xl px-[1rem] md:px-[3rem]'>Politikamiz</div>
        <div className={`w-[40%] border-t border-gray-300 `}></div>
      </div>

      <div className='flex w-full justify-center flex-wrap'>
      {policies.map((items)=> {
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