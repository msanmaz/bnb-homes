import React, { useState } from 'react'
import Input from 'common/Input/index.tsx'
import { useForm } from "react-hook-form"
import Button from 'common/Button/but-ton'

const RentalUpload = () => {
    const Locations = [{ loc: 'room',type:'text' },{loc:'caption',type:'text'}, { loc: 'livingR',type:'text' }, { loc: 'kitchen',type:'text' }, { loc: 'bathR',type:'text' }, { loc: 'carpark',type:'text' }, { loc: 'location',type:'text' }, { loc: 'price',type:'text' }, { loc: 'heating',type:'text' }, { loc: 'type',type:'text' }, { loc: 'file',type:'file' }]
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            type:'Kiralik'
          }
    })
    const [success,setSuccess] = useState(false)
    const onFormSubmit = async (data, event) => {
        event.preventDefault();
        const { room, livingR,kitchen,bathR,carpark,location,price,heating,type,image } = data
        const response = await fetch('/api/upload', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                room, livingR,kitchen,bathR,carpark,location,price,heating,type,image
            })
        })
        const resp = await response.json()
        if(resp){
            setSuccess((prev) => !prev)
        }
    }
    return (
        <>
        <div className='py-[5rem]'>

        <h1 className='text-2xl flex justify-center bebas'>Kiralik Ev Ekleme</h1>
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
            </div>


            <div className='px-[2rem] w-full'>
                <Button variant={success ? 'success' : 'primary'}>{success ? 'Yuklendi' : 'Evi Yukle'}</Button>

            </div>
            </form>
        </div>


        </>
    )
}

export default RentalUpload