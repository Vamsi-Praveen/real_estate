import React from 'react'
import ClientCard from './ClientCard'

const Client = () => {

    const clientDetails = [
        {
            name: 'Catherine',
            img: '/images/u1.jpg',
            des: 'Protographer'
        },
        {
            name: 'John Thomas',
            img: '/images/u2.jpg',
            des: 'Engineer'
        },
        {
            name: 'Rosy',
            img: '/images/u3.jpg',
            des: 'Teacher'
        },
        {
            name: 'Tornado',
            img: '/images/u4.jpg',
            des: 'Doctor'
        },
    ]

    return (
        <div className='my-5 w-full mt-[60px]'>
            <h1 className='text-center font-bold text-3xl mb-3'>What Our Clients Say</h1>

            <div className='flex flex-wrap items-center justify-center gap-4 mt-5 '>
                {
                    clientDetails.map((client, i) => {
                        return (
                            <ClientCard details={client} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Client
