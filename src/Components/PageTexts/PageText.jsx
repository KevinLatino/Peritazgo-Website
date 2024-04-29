import React from 'react'

export const Title = ({ children }) => {
    return (
        <>
            <h1 className='text-[36px] text-title_color font-sans font-bold '>
                {children}
            </h1>
        </>
    )
}

export const Paragraph = ({ children }) => {
    return (
        <p className='text-white text-[17px]'>
            {children}
        </p>
    )
}

export const GreenTitle = ({ children }) => {
    return (
        <h2 className='flex text-green_text gap-3'>
            {children}
        </h2>
    )
}

export const RedTitle = ({ children }) => {
    return (
        <h2 className='flex text-red_text gap-3'>
            {children}
        </h2>
    )
}

export const Element = ({ children }) => {
    return (
        <p className='text-white text-[17px]'>
            {children}
        </p>
    )
}

export const Space = () => {
    return (
        <span>
            &nbsp;
        </span>
    )
}
