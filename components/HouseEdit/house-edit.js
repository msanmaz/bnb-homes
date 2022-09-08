import React from 'react'
import { storage } from 'lib/firebase'
import { useState } from 'react';
import clsx from 'clsx';
import Button from 'common/Button/but-ton';
import {ref,uploadBytes,listAll} from 'firebase/storage'


const EditHouse = () => {
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);


    const handleChange = (e) => {
      for (let i = 0; i < e.target.files.length; i++) {
        const newImage = e.target.files[i];
        setImages((prevState) => [...prevState, newImage]);
      }
    };

      const handleUpload = () => {
        images.map((image,index) => { 
          const uploadTask = ref(storage,`images/${image.name}`);

          uploadBytes(uploadTask,image).then(() => {
            const onUploadProgress =(progressEvent) => {
              const progress = (progressEvent.loaded / progressEvent.total) * 50;
              setProgress(progress);
            }
           const onDownloadProgress = (progressEvent) => {
              const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
              console.log(progress);
              setProgress(progress);
            }
            onUploadProgress()
            onDownloadProgress()
          })
        });

      };
   

  return (
    <div>

        <Input handleChange={handleChange} />
        <Button handleUpload={handleUpload}> Upload Image</Button>
    </div>
  )
}


const Input = ({handleChange}) => {
  
  return (
    <input
    type={'file'}
    name={'image'}
    multiple
    onChange={handleChange}
    placeholder="Upload Image "
    className={clsx(
      "pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
    )}
  />

  )
}

export default EditHouse