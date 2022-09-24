import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from 'common/Button/but-ton'

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
                <Image src={`/${image}`} alt={'Image Location'} layout="responsive" className='relative' width={600} height={520}/>
                <div className='absolute h-full inset-0 hover:opacity-0 opacity-50 bg-gray-800'></div>
                <Link href={`/${title}`}>
                    <div className="absolute mobilecenter small:centerlayer">
                        <div className="text-center">
                            <div className="inline-flex">
                             <Button variant='primary'>{title}</Button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default LocationCardContainer