import React from 'react'

const HouseFinder = () => {
  return (
    <div>HouseFinder</div>
  )
}

export default HouseFinder



const Input = () => {
  return (
    <input
    type={'text'}
    name={'finder'}
    onChange={handleChange}
    placeholder="Find Desired House"
    className={clsx(
      "pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
    )}
  />
  )
}