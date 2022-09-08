import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Locations = [{ loc: 'Istanbul', image: 'istanbulbg.jpg' }, { loc: 'Bodrum', image: 'bodrumbg.png' }, { loc: 'stuttgart', image: 'stuttgartbg.jpg' }]

const LocationCardContainer = () => {
    return (

        <>
            <div className='grid px-[1rem] grid-cols-1 small:grid-cols-3 gap-[0.5rem] '>
            {
                Locations.map((items)=> {
                    return <LocationCard key={items.loc} title={items.loc} image={items.image}/>
                })
            }

            </div>

        </>
    )
}








const LocationCard = ({image,title}) => {
    return (
        <>
            <div className={`relative w-full`}>
                <Image src={`/${image}`} layout="responsive" className='relative' width={600} height={520}/>
                <div className='absolute h-full inset-0 hover:opacity-0 opacity-50 bg-gray-800'></div>
                <Link href={`/${title}`}>
                    <div className="absolute mobilecenter small:centerlayer">
                        <div className="text-center">
                            <div className="inline-flex">
                                <button className="z-20 block uppercase mx-auto shadow dark:bg-blue-light dark:text-white dark:hover:bg-white dark:hover:text-black bg-white hover:bg-blue-light hover:text-white focus:shadow-outline focus:outline-none text-black text-xs py-3 px-10 rounded">{title}</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default LocationCardContainer