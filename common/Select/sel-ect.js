import React from 'react'

const Select = ({setFilteredWord}) => {

    const handleChange = e => {
        setFilteredWord(e.target.value);
      };

    return (
        <>
            <div className='flex justify-center  gap-x-6 md:flex-row'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Number Of Rooms</span>
                    </label>
                    <select className="select select-bordered" onChange={handleChange}>
                        <option value={'All'}>All house</option>
                        <option value='1'>1 Room</option>
                        <option value='2'>2 Room</option>
                        <option value='3'>3 Room</option>
                        <option value='4'>4 Room</option>
                        <option value='5'>5+ Room</option>
                    </select>
                </div>
            </div>

        </>
    )
}

export default Select