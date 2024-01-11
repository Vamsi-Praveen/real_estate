import React from 'react'

const ClientCard = ({ details }) => {
    return (
        <div className='h-[250px] w-[180px]  rounded-[14px] relative overflow-hidden hover:scale-105 cursor-pointer transition-transform ease-in'>
            <img src={details.img} className='h-full w-full object-cover absolute z-1' />
            <div className='absolute z-5 bottom-2 left-2'>
                <h1 className='font-dmsans font-medium  text-white'>{details.name}</h1>
                <p className='text-white text-[14px]'>{details.des}</p>
            </div>
        </div>
    )
}

export default ClientCard
