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
        <h2 className='Subtitle-text'>
            {children}
        </h2>
    )
}

export const Paragraph = ({ children }) => {
    return (
        <p className='Paragraph-text'>
            {children}
        </p>
    )
}
