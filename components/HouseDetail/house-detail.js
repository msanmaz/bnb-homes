import React from 'react'
import Gallery from 'common/ImageGallery/image-gallery'
import RightColumn from './detail-column'
const HouseDetail = ({house}) => {
  return (
<>
<div className='w-full hidden  md:flex px-auto justify-center md:px-[6.3rem] md:justify-start bebasBold text-xl md:text-5xl pt-[2rem]'>
{house.caption}
</div>
<div className='w-full px-auto md:px-[5rem] h-full grid grid-cols-1 md:grid-cols-2 gap-[0.5rem] py-6'>
  <div className='px-6'>
  <Gallery images={house.images} />
  </div>

  <div className='w-full py-2 flex px-auto justify-center md:hidden md:justify-start bebasBold text-5xl mt-[2rem]'>
{house.caption}
</div>
  <div className='px-[2rem] md:px-[4rem]'>
<RightColumn house={house}/>
  
  </div>

</div>

</>
  )
}

export default HouseDetail