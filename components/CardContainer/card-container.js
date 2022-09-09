import React from 'react'
import HouseCard from 'components/HouseCard/house-card'

const CardContainer = ({houses}) => {
  return (
    <div className='flex flex-wrap md:px-6 px-0 py-6'>
 {!houses.length ? <div className='bebasBold text-2xl text-gray-400'>Loading....</div> : houses.map((item) => {
          return (
            <HouseCard key={item.id} location={item.location} img={item.image} caption={item.caption} price={item.price} type={item.type} />
          )
        })
        }



    </div>
  )
}

export default CardContainer