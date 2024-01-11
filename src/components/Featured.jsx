import React from 'react'
import FeatureItem from './FeatureItem'

const Featured = () => {

    const buildingDetails = [
        {
            name: 'The Domain',
            img: '/images/b1.jpg'
        },
        {
            name: 'Gray Home',
            img: '/images/b2.jpg'
        },
        {
            name: 'Space Hub',
            img: '/images/b3.jpg'
        },
    ]

    return (
        <div className='my-5 w-full mt-[60px]'>
            <h1 className='text-center font-bold text-3xl mb-3'>Featured Listing</h1>
            <div className='flex flex-wrap mt-6 gap-6 items-cnter justify-center'>
                {
                    buildingDetails.map((details, i) => {
                        return (
                            <FeatureItem details={details} key={i} />
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Featured
