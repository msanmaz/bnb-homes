import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({images}) => {
    const image = images.map(image => ({
        original:`${image.url}`,
        thumbnail:`${image.url}`
    }))

  return (
<div className='w-full'>
<ImageGallery thumbnailPosition={'bottom'} slideOnThumbnailOver={false} showNav={false} showPlayButton={false} items={image} />    
 </div>
  )
}

export default Gallery