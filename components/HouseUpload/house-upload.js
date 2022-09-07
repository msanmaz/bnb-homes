import React from 'react'
import Input from 'common/Input/index.tsx'
import { useForm } from "react-hook-form"
import Button from 'common/Button/but-ton'
import { useState } from 'react'
import Spinner from 'common/icons/spinner'

const HouseUpload = () => {
    const Locations = [{ loc: 'room' },{loc:'caption'}, { loc: 'livingR' }, { loc: 'kitchen' }, { loc: 'bathR' }, { loc: 'carpark' }, { loc: 'location' }, { loc: 'price' }, { loc: 'heating' }, { loc: 'type' }, { loc: 'image' }]
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors,isSubmitSuccessful },
    } = useForm({
        defaultValues: {
            type:'Satilik'
          }
    })
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)


    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset();
        }
      }, [formState, reset]);
    

    const onFormSubmit = async (data, event) => {
        event.preventDefault();
        setLoading(true)
        const { room,caption, livingR,kitchen,bathR,carpark,location,price,heating,type,image } = data
        const response = await fetch('/api/upload', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                room,livingR,kitchen,bathR,carpark,location,price,heating,type,image,caption
            })
        })
        const resp = await response.json()
        if(resp){
            setSuccess(true)
            setLoading(false)
        }
    }

    var icon = (success) ? 'Yuklendi' : (loading) ? <Spinner/> : 'Evi Yukle';

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
                                    label={item.loc}
                                    {...register(`${item.loc}`, { required: `${item.loc} is required` })}
                                    autoComplete={item.loc}
                                    errors={errors}
                                />
                            </div>
                        )
                    })
                }
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