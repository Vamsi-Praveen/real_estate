import React from 'react'
import Button from './Button'

const BuyerCard = () => {
  const items = [
    {
      title: 'Location',
      value: 'New York City'
    },
    {
      title: 'Property Type',
      value: 'Duplex House'
    },
    {
      title: 'Price Range',
      value: '$21,000-$40,000'
    }
  ]
  return (
    <div className='min-h-[120px] md:w-[70%] w-full bg-white rounded-[18px] md:px-[3vw] px-[5vw] md:py-[1vw] py-[5vw]'>
      <div className='flex gap-3 mb-3'>
        <div>
          <h1 className='font-bold text-black font-dmsans'>Buy</h1>
          <div className='h-[2px] w-3 rounded-lg bg-black ml-2'/>
        </div>
        <h1 className='font-dmsans '>Rent</h1>
      </div>
      <div className='flex md:gap-10 gap-4 md:flex-row flex-col'>
        {
          items.map((item, i) => {
            return (
              <div key={i} className='md:border-r px-[2vw]'>
                <div>
                  <p className='text-[#dadada] text-[14px]'>{item.title}</p>
                  <h1 className='font-bold'>{item.value}</h1>
                </div>
              </div>
            )
          })
        }
        <Button variant="dark">
          <i className="fi fi-rr-search mr-2 mt-1"></i>
          Search
        </Button>
      </div>
    </div>
  )
}

export default BuyerCard
