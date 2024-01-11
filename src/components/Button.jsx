import React from 'react'

const Button = ({ variant, children }) => {
    return (
        <button className={variant == 'dark' ? 'bg-black text-white text-[14px] px-4 py-2 rounded-md cursor-pointer flex items-center justify-center' : variant == 'light' ? 'text-[14px] px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-center' : ''}>
            {children}
        </button>
    )
}

export default Button
