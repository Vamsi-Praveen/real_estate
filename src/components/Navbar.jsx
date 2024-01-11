import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='h-[80px] w-full sticky z-20 top-0 left-0 bg-white'>
      <div className='px-[5vw] h-full w-full flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-[20px]'>Urban.</h1>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-6'>
                <li className='navlink'>Home</li>
                <li className='navlink'>Services</li>
                <li className='navlink'>Property</li>
                <li className='navlink'>Contact</li>
            </ul>
        </div>
        <div className='flex gap-3'>
            <Button variant="light">Login</Button>
            <Button variant="dark">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
