import Phone from 'common/icons/phone'
import React from 'react'

const MobilePhone = () => {
  return (
<>
<a href="tel:+90 531 344 30 90">
    <div className='fixed flex z-[100] justify-center animate-pulse bottom-[2rem] left-4 rounded-full bg-gray-800 w-[3rem] h-[3rem]'>
   <div className='pt-2'>
   <Phone color='white' size={30}/>
   </div> 
    </div>
    </a>
</>
  )
}

export default MobilePhone