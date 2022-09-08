import React from 'react'

const Select = () => {
    return (
        <>
            <div className='flex justify-center  gap-x-6 md:flex-row'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Number Of Rooms</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled defaultValue>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Type</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>




            </div>

        </>
    )
}

export default Select