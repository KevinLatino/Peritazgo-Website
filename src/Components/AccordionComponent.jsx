import React from 'react'
import { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <MagicMotion>
                <div className=' p-5 flex items-start flex-wrap w-2/4 bg-blue_section rounded-3xl '>
                    <button
                        className='flex justify-between items-center rounded-3xl bg-fixed text-purple_text w-full text-[18px]'
                        onClick={handleOpen}
                    >
                        {title}
                        <ChevronDown size={32} className={`transform ${open ? 'rotate-180 transition-transform duration-320 ease-in-out' : 'transition-transform duration-320 ease-in-out'}`}/>
                    </button>

                    {open && (
                        <>
                            <div>
                                {children}
                            </div>
                        </>
                    )}
                </div>
            </MagicMotion>
        </>
    )
}

export { Accordion };