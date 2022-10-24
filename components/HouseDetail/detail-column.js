import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from "lib/context/darkModeContext"
import Comfort from 'common/icons/comfort'
import Saloon from 'common/icons/saloon'
import Money from 'common/icons/money'
import M2 from 'common/icons/m2'
import Kitchen from 'common/icons/kitchen'
import Bathroom from 'common/icons/bathroom'
import Combi from 'common/icons/combi'
import clsx from 'clsx'
import Balkon from 'common/icons/balkon'
import ColumnItem, { Surroundings } from './column-item'

const RightColumn = ({house}) => {

  const { isDark } = useContext(DarkModeContext)
  const dark = isDark
  console.log(isDark,'isdak')

  return (
    <div className='daire w-full justify-items-center '>
      <Price house={house}/>
      <ColumnItem caption={'Flat Information'} house={house}/>
      <Surroundings caption={'Surroundings'} house={house}/>

    </div>
  )
}



const Price = ({house}) => {
  return (
    <div className='flex flex-row border-b border-gray-400 justify-between w-full  my-4'>
      <div className='pb-6 flex-start flex px-0 md:px-[2rem]'>
      <Money size={40}/>
      <p className='text-xl futuraMedium px-4 items-center flex pt-4'>{house.price}</p>
      </div>

      <div className='pb-6 flex md:pr-[2rem]'>
      <M2 size={40}/>
      <p className='text-xl futuraMedium px-4 items-center flex pt-4'>{house.m2}</p>
      </div>


    </div>
  )
}



export default RightColumn