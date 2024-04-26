import React from 'react'
import './PageTexts.css'

export const Title = ({ children }) => {
    return (
        <>
            <h1 className='Title-Text'>
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
