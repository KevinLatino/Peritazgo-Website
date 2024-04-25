import React from 'react'
import { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'react-magic-motion';
import './Accordion.css'

const Accordion = ({ title, children }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <MagicMotion>
                <div className='accordion-container'>

                    <button
                        className='accordion-button'
                        onClick={handleOpen}
                    >
                        {title}
                        <ChevronDown size={32} className='chevron-styles'/>
                    </button>
                    
                    {open && (
                        <>
                            {children}
                        </>
                    )}
                </div>
            </MagicMotion>
        </>
    )
}

export { Accordion };
