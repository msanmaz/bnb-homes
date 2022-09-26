import React, { useState, useMemo, useEffect } from 'react'
import HouseCard from 'components/HouseCard/house-card'
import Select from 'common/Select/sel-ect'


const CardContainer = ({ houses }) => {
  const [data, setData] = useState(houses)
  const [filteredWord, setFilteredWord] = useState()
  const filteredHouse = useMemo(() => {
    if (!filteredWord) return data
    if (filteredWord === 'All') return data
    return data.filter(p => p.room === filteredWord)
  }, [data, filteredWord])


  return (
    <>
      <Select setFilteredWord={setFilteredWord} />
      <div className='flex flex-wrap justify-center md:px-6 px-0 py-6'>
        {!filteredHouse ? <div className='bebasBold text-2xl text-gray-400'>Loading....</div> : filteredHouse.map((item) => {
          return (
            <HouseCard key={item.id} id={item.id} location={item.location} img={item.image} caption={item.caption} price={item.price} type={item.type} />
          )
        })
        }



      </div>
    </>
  )
}

export default CardContainer