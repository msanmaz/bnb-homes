import React, { useEffect } from 'react'
import Input from 'common/Input/index.tsx'
import { useForm } from "react-hook-form"
import Button from 'common/Button/but-ton'
import { useState } from 'react'
import Spinner from 'common/icons/spinner'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from 'lib/firebase'

const HouseUpload = () => {
    const Locations = [{ loc: 'room', type: 'text' }, { loc: 'caption', type: 'text' }, { loc: 'livingR', type: 'text' }, { loc: 'kitchen', type: 'text' }, { loc: 'bathR', type: 'text' }, { loc: 'carpark', type: 'text' }, { loc: 'location', type: 'text' }, { loc: 'price', type: 'text' }, { loc: 'heating', type: 'text' }, { loc: 'type', type: 'text' }, {loc:'description', type:'textarea'}]
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        defaultValues: {
            type: 'Satilik'
        }
    })
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);




    useEffect(() => {
        console.log(images)
    }, [images])


    const onFormSubmit = async (data, event) => {
        event.preventDefault();
        setLoading(true)

        const { room, caption, livingR, kitchen, bathR, carpark, location, price, heating, type,description } = data
        const refStorage = ref(storage, `images/${images.name}`);
        uploadBytes(refStorage, images).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        room, livingR, kitchen, bathR, carpark, location, price, heating, type, url, caption,description
                    })
                })
                const resp = await response.json()
                if (resp) {
                    setSuccess((prev) => !prev)
                    setLoading((prev) => !prev)
                }
            })
        })

    }






    var icon = (success) ? 'Yuklendi' : (loading) ? <Spinner /> : 'Evi Yukle';

    return (
        <>
            <div className='py-[5rem]'>

                <h1 className='text-2xl flex justify-center bebas'>Satilik Ev Ekleme</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='w-full flex flex-wrap'>
                        {
                            Locations.map((item) => {
                                return (
                                    <div key={item.loc} className='px-4 py-4 w-[50%]'>


                                        <Input
                                            type={item.type}
                                            label={item.loc}
                                            {...register(`${item.loc}`, { required: `${item.loc} is required` })}
                                            autoComplete={item.loc}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            })
                        }

                        <FileInput setImages={setImages} />
                    </div>


                    <div className='px-[2rem] w-full'>
                        <Button variant={success ? 'success' : 'primary'}>{icon}</Button>

                    </div>
                </form>
            </div>


        </>
    )
}

export default HouseUpload




const FileInput = ({ setImages }) => {

    return (
        <div className='w-full px-4'>

            <input
                type={'file'}
                name={'image'}
                onChange={(event) => {
                    setImages(event.target.files[0])
                }}
                placeholder="Upload Image "
                className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"

            />
        </div>


    )
}