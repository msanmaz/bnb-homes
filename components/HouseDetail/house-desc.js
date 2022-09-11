import React from 'react'

const HouseDescription = ({ house }) => {
    const arr = house.description !== null ? house.description.split(/<br \/>/) : [];
    const resultArr = [];
    arr?.forEach((item, i) => {
        if (i % 2 === 0) resultArr.push(<br />);
        resultArr.push(item);
    })

    return (
        <>
            <div className='w-full flex flex-col pt-6 md:pt-[3rem] items-center justify-center'>
                {
                    resultArr.filter((item)=> item.length >= 1).map((item,index) => {
                        return (
                            <p key={index} className='futuraMedium text-lg py-2'>

                               {item} <br />
                            </p>
                        )
                    })
                }
    {/* {house.description.split('\n').map( (it, i) => <div key={'x'+i} className='futuraMedium text-lg'>{it}</div> )} */}


            </div>




        </>
    )
}


export default HouseDescription