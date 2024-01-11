import React from 'react'

const FeatureItem = ({ details }) => {
    return (
        <div className='h-[280px] w-[220px]  rounded-[14px] relative overflow-hidden hover:scale-105 cursor-pointer transition-transform ease-in'>
            <img src={details.img} className='h-full w-full object-cover absolute z-1' />
            <p className='text-[10px] text-black font-bold bg-white inline-block p-1 px-2 rounded-full absolute right-2 z-5 top-2'>For Sale</p>
            <h1 className='font-dmsans font-medium absolute z-5 bottom-2 left-2 text-white'>{details.name}</h1>
        </div>
    )
}

export default FeatureItem
