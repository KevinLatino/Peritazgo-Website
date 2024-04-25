import React from 'react'
import './Section.css'

export const SectionBlue = ({ children }) => {
    return (
        <>
            <div className='blue-note'>
                {children}
            </div>
        </>
    )
}

export const SectionGreen = ({ children }) => {
    return (
        <div className="green-note">
            {children}
        </div>
    )
}

export const SectionRed = ({ children }) => {
    return (
        <div className="red-note">
            {children}
        </div>
    )
}


