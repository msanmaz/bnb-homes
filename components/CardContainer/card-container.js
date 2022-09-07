import React from 'react'
import HouseCard from 'components/HouseCard/house-card'

const CardContainer = ({houses}) => {
  return (
    <div className='flex flex-wrap md:px-6 px-0 py-6'>
 {!houses.length ? <div>..Loading</div> : houses.map((item) => {
          return (
            <HouseCard img={item.image} caption={item.caption} price={item.price} type={item.type} />
          )
        })
        }



    </div>
  )
}

export default CardContainer