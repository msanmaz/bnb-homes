import React, { useEffect } from 'react'
import clsx from 'clsx'
import CardContainer from 'components/CardContainer/card-container'
import HouseCard from 'components/HouseCard/house-card'

const HouseFinder = ({houses}) => {
  const [searchInput, setSearchInput] = React.useState('')



  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   if (searchInput !== '') {
  //     const filteredData = houses.filter((item) => {
  //       return Object.values(item.caption).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     })
  //     setFilteredResults(filteredData)
  //   }
  //   else {
  //     setFilteredResults(houses)
  //   }
  // }


  return (
    <>
      <div className="max-w-sm w-full flex flex-col py-6 items-center">
        <div className='bebasBold text-2xl py-6 justify-center'>Enter House Name For Results</div>
        <Input setSearchInput={setSearchInput} />
      </div>
      
      <div className='flex !w-[100%] md:flex-row justify-center flex-wrap md:px-2 px-0 py-4'>
      {
        searchInput.length >= 1 ?  houses.filter((house) => 
        house.caption.toLowerCase().includes(searchInput)
        ).map((item) => (
         
          <HouseCard key={item.id} id={item.id} location={'admin'} img={item.image} caption={item.caption} price={item.price} type={item.type} />

   

        )) : <div className='futuraMedium text-red-500 '>No houses to show text name of the house for match!</div>

      }
       </div>


    </>
  )
}

export default HouseFinder



const Input = ({ setSearchInput }) => {
  return (
    <input
    type={'text'}
    name={'finder'}
    placeholder="Type To Find House"
    onChange={(e)=> setSearchInput(e.target.value)}
    className={clsx(
      "pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200",
    )}

  />



  )
}