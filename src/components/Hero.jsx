import React from 'react'
import BuyerCard from './BuyerCard'

const Hero = () => {
    return (
        <section className='min-h-[calc(100vh-80px)] h-[350px] px-5 py-2 w-full'>
            <div className='h-full w-full rounded-[20px] overflow-hidden bg-banner bg-cover px-[5vw] md:py-[4vw] py-[10vw] flex flex-col justify-between'>
                <div className='w-full md:w-[35%] leading-tight'>
                    <h1 className='text-3xl font-medium md:text-4xl text-white font-dmsans'>Discover Your Perfect Property Today.</h1>
                    <p className='text-[14px] mt-[20px] text-white md:mt-[30px] leading-tight'>Real Estate properties for sale and<br /> rent in over 12+ countries.</p>
                </div>

                <div className='w-full flex items-center justify-center mt-10 md:mt-0'>
                    <BuyerCard />
                </div>
            </div>
        </section>
    )
}

export default Hero
