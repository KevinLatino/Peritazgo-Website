import { space } from 'postcss/lib/list'
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

export const Subtitle = ({ children }) => {
    return (
        <h2 className=''>
            {children}
        </h2>
    )
}

export const Paragraph = ({ children }) => {
    return (
        <p className='text-white text-[17px] font-sans'>
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
