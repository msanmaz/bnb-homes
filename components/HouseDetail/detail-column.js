import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from "lib/context/darkModeContext"
import Comfort from 'common/icons/comfort'
import Saloon from 'common/icons/saloon'
import Money from 'common/icons/money'
import M2 from 'common/icons/m2'
import Kitchen from 'common/icons/kitchen'
import Bathroom from 'common/icons/bathroom'
import Combi from 'common/icons/Combi'
import Balkon from 'common/icons/balkon'

const RightColumn = ({house}) => {
  console.log(house,'houseincolumn')
  const { isDark } = useContext(DarkModeContext)
  console.log(isDark,'isdarki')
  return (
    <div className='daire w-full justify-items-center '>
      <Price house={house}/>
      <div className={`w-full ${isDark ? 'bg-white text-base-100' : '!bg-[#161616] !text-white'} bebasBold text-xl flex justify-center items-center h-[3rem]`}>
      Daire Ozellikleri
      </div>
    <div className='grid w-full'>
    <div className='flex w-full justify-between flex-wrap flex-row'>
        <div className='flex !w-[50%] md:w-full flex-row items-center pl-[2rem]'>
        <Comfort  isDark={isDark} size={85} />
        <p className='text-xl futuraMedium px-4'>{house.livingR} Oda</p>
        </div>

      <div className='flex items-center !w-[50%] md:w-full flex-row pr-4'>
      <Saloon isDark={isDark} size={100} />
      <p className='text-xl futuraMedium px-4'>{house.room} Oda</p>
      </div>

      <div className='flex flex-row !w-[50%] md:w-full items-center pl-[1.5rem]'>
      <Kitchen isDark={isDark} size={100} />
      <p className='text-xl futuraMedium px-4'>{house.room} Mutfak</p>
        </div>

      <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.2rem]'>
      <Bathroom size={80}/>
      <p className='text-xl futuraMedium px-4'>{house.room} Banyo</p>
      </div>


      <div className='flex items-center !w-[50%] md:w-full flex-row pl-[1.5rem]'>
      <Combi size={110}/>
      <p className='text-xl futuraMedium px-4'>{house.heating}</p>
      </div>


      <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.4rem]'>
      <Balkon size={90}/>
      <p className='text-xl futuraMedium px-4'>{house.type}</p>
      </div>



        </div>
    </div>

    <div className='grid w-full'>
    <div className={`w-full ${isDark ? 'bg-white text-base-100' : '!bg-[#161616] !text-white'} bebasBold text-xl flex justify-center items-center h-[3rem]`}>
      Cevre
      </div>

    </div>


    </div>
  )
}



const Price = ({house}) => {
  return (
    <div className='flex flex-row justify-between w-full py-4'>
      <div className='pb-6 flex-start flex px-0 md:px-[2rem]'>
      <Money size={70}/>
      <p className='text-xl futuraMedium px-4 items-center flex pt-4'>{house.price}</p>
      </div>

      <div className='pb-6 flex md:pr-[2rem]'>
      <M2 size={70}/>
      <p className='text-xl futuraMedium px-4 items-center flex pt-4'>{house.livingR}</p>
      </div>


    </div>
  )
}



export default RightColumn