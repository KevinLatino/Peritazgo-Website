import React, { children } from 'react'

export const BlueSection = ({ children }) => {
    return (
        <>
            <div className='flex items-start flex-col flex-wrap bg-blue_section w-fit p-5 rounded-2xl'>
                {children}
            </div>
        </>
    )
}

export const GreenSection = ({ children }) => {
    return (
        <div className="flex items-start flex-col flex-wrap bg-green_section w-fit p-5 rounded-2xl">
            {children}
        </div>
    )
}

export const RedSection = ({ children }) => {
    return (
        <div className="flex items-start flex-col flex-wrap bg-red_section w-fit p-5 rounded-2xl">
            {children}
        </div>
    )
}

export const PurpleSection = ({ children }) => {
    return (
        <div className='flex items-start flex-col flex-wrap bg-purple_section w-fit p-5 rounded-2xl'>
            {children}
        </div>
    )
}

export const PurpleWordSection = ({ children }) => {
    return (
        <div className='flex items-start flex-col flex-wrap bg-purple_word_section w-fit px-1 rounded-2xl'>
            {children}
        </div>
    )
}

export const WordSection = ({ children }) => {
    return (
        <div className=' flex justify-center bg-word_section rounded-md px-1 '>
            {children}
        </div>
    )
}
