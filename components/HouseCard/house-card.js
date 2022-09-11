import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HouseCard = ({img,type,price,caption,location,id}) => {

    return (
        <Link href={`/${location}/${id}`}>
        <div className={`card cursor-pointer mx-2 my-2 !hover:opacity-100 w-full md:w-[32%] shadow-xl image-full`}>
            <Image layout='responsive' width={600} height={350} className="bg-center rounded-xl object-cover" src={img}
                alt="Profile picture" />
            <div className="card-body !p-[1rem]">
                <div className="card-title">                  <a href="#" className="text-xs bg-[#161616] text-white px-5 py-2 uppercase hover:bg-white hover:text-black transition ease-in-out duration-500">{type}</a>
                </div>
                <p></p>
                <div className='flex justify-between items-end flex-row'>
                    <div className="card-actions justify-start">
                        <button className="!text-xl bg-transparent futuraMedium uppercase !text-white">{caption}</button>
                    </div>
                    <div className="card-actions !items-end justify-end">
                        <button className="futuraMedium !text-lg !text-white">{price}</button>
                    </div>
                </div>

            </div>
        </div>
        </Link>
    )
}

export default HouseCard