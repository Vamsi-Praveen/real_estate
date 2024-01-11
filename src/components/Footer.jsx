import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t w-full px-[5vw] py-[2vw] mt-[60px]'>
            <div className='flex items-center justify-between flex-wrap'>
                <div>
                    <h1 className='font-bold text-[20px]'>Urban.</h1>
                    <p>Real Estate Agency.</p>
                </div>
                <div>
                    <p className='text-[14px]'>&copy; 2019 - {new Date().getFullYear()} | All Rights Reserved.</p>
                </div>
                <div>
                    <p className='text-[14px]'>Crafted with ❤ by <span className='font-semibold font-dmsans'>Vamsi</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
