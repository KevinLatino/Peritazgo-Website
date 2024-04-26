import React, { children } from 'react'
import './Section.css'

export const BlueSection = ({ children }) => {
    return (
        <>
            <div className='blue-note'>
                {children}
            </div>
        </>
    )
}


export const GreenSection = ({ children }) => {
    return (
        <div className="green-note">
            {children}
        </div>
    )
}

export const RedSection = ({ children }) => {
    return (
        <div className="red-note">
            {children}
        </div>
    )
}


