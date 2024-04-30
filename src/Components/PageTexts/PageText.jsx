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

export const GreenTitle = ({ children }) => {
    return (
        <h2 className='flex text-green_text gap-3 font-sans text-[18px] font-bold '>
            {children}
        </h2>
    )
}

export const RedTitle = ({ children }) => {
    return (
        <h2 className='flex text-red_text gap-3 text-[18px] font-bold '>
            {children}
        </h2>
    )
}

export const BlueTitle = ({ children }) => {
    return (
        <h2 className='flex text-blue_text gap-3 text-[18px] font-bold '>
            {children}
        </h2>
    )
}

export const PurpleTitle = ({ children }) => {
    return (
        <h2 className='flex text-purple_text gap-3 text-[18px] font-bold '>
            {children}
        </h2>
    )
}



export const Paragraph = ({ children }) => {
    return (
        <p className='text-white text-[17px]'>
            {children}
        </p>
    )
}


export const Element = ({ children }) => {
    return (
        <p className='flex text-white text-[17px] p-3'>
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
