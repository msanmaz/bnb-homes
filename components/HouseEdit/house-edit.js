import React from 'react'
import { storage } from 'lib/firebase'
import { useState } from 'react';
import clsx from 'clsx';
import Button from 'common/Button/but-ton';
import { ref, uploadBytesResumable, listAll, getDownloadURL } from 'firebase/storage'


const EditHouse = ({ house }) => {
  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState([]);
  const [progress, setProgress] = useState(0);
  console.log(house,'house')

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = i
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    images.map((image, index) => {
    
      const refStorage = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(refStorage, image)
      uploadTask.on(
        "state_changing",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(async (img) => {
            console.log(image,'img in egt')
            const response = await fetch('/api/imageUpload', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                imageId:image.id,
                image: img,
                id: house.id
              })
            })
            const resp = await response.json()
            setSuccess(resp)
            console.log(resp)
          })
        });
    });

  };


  return (
    <div>
      <div className='bebasBold text-2xl flex justify-center'>{house && house.caption}</div>
      <Input handleChange={handleChange} />
      <Button handleUpload={handleUpload}> Upload Image</Button>
      <Success progress={progress} success={success} />

    </div>
  )
}


const Input = ({ handleChange }) => {

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

const Success = ({ progress,success }) => {
  return (
    <>
      <div className='flex flex-col py-6 justify-center'>
        {
          progress === 100 && <div className='flex text-green-400 justify-center bebasBold text-2xl py-4'>Uploading Images To Database Now</div>

        }
                {
          success && <div className='flex text-green-400 justify-center bebasBold text-2xl py-4'>{success.success}</div>

        }
        <div className='flex justify-center'>
          <div className="radial-progress" style={{ "--value": progress }}>{progress}%</div>
        </div>


      </div>

    </>
  )
}

export default EditHouse