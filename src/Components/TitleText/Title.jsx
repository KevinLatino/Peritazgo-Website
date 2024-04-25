import React from 'react'
import './Title.css'

const Title = ({ children }) => {
    return (
        <>
        <h1 className='Title-Text'>
            {children}
        </h1>
        </>
    )
}

export { Title }
