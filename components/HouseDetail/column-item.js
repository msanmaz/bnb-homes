import React from 'react'

const ColumnItem = ({ caption, house }) => {
    return (
        <>
            <div tabIndex={0} className="collapse collapse-open border  my-2 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bebasBold">
                    {caption}
                </div>
                <div className="collapse-content">
                    <div className='grid w-full'>
                        <div className='flex w-full justify-between flex-wrap flex-row'>
                            <div className='flex py-2 items-center !w-[50%] md:w-full flex-row pr-4'>
                                <p className='futuraMedium text-base'>Room:</p>
                                <p className='text-xs bebas px-4'>{house.room}</p>
                            </div>

                            <div className='flex py-2 flex-row !w-[50%] md:w-full items-center pl-[1.5rem]'>
                                <p className='futuraMedium text-base'>Kitchen:</p>
                                <p className='text-xs bebas px-4'>{house.kitchen}</p>
                            </div>

                            <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.2rem]'>
                                <p className='futuraMedium text-base'>Bathroom:</p>

                                <p className='text-xs bebas px-4'>{house.bathR}</p>
                            </div>


                            <div className='flex items-center py-2 !w-[50%] md:w-full flex-row pl-[1.5rem]'>
                                <p className='futuraMedium text-base'>Heating:</p>

                                <p className='text-xs bebas px-4'>{house.heating}</p>
                            </div>


                            <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.4rem]'>
                                <p className='futuraMedium text-base'>For:</p>
                                <p className='text-base bebas px-4'>{house.type}</p>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export const Surroundings = ({ caption, house }) => {
    return (
        <>
            <div tabIndex={0} className="collapse collapse-arrow border  my-2 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bebasBold">
                    {caption}
                </div>
                <div className="collapse-content">

                    <div className='grid w-full'>
                        <div className='flex w-full justify-between flex-wrap flex-row'>
                            <div className='flex py-2 items-center !w-[50%] md:w-full flex-row pr-4'>
                                <p className='bebas text-base'>Sea:</p>
                                <p className='text-xs futuraMedium px-4'>{house.room} Oda</p>
                            </div>

                            <div className='flex py-2 flex-row !w-[50%] md:w-full items-center pl-[1.5rem]'>
                                <p className='bebas text-base'>Airport:</p>
                                <p className='text-xs futuraMedium px-4'>{house.room} Mutfak</p>
                            </div>

                            <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.2rem]'>
                                <p className='bebas text-base'>Mall:</p>

                                <p className='text-xs futuraMedium px-4'>{house.room} Banyo</p>
                            </div>


                            <div className='flex items-center py-2 !w-[50%] md:w-full flex-row pl-[1.5rem]'>
                                <p className='bebas text-base'>Restaurants:</p>

                                <p className='text-xs futuraMedium px-4'>{house.heating}</p>
                            </div>


                            <div className='flex items-center !w-[50%] md:w-full flex-row pr-[0.4rem]'>
                                <p className='bebas text-base'>Train:</p>
                                <p className='text-base futuraMedium px-4'>{house.type}</p>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ColumnItem




