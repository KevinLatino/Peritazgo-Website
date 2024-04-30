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
                <div className=' p-5 flex items-start flex-wrap w-2/5 bg-blue_section rounded-3xl '>
                    <button
                        className='flex justify-between items-center  rounded-3xl bg-fixed text-accordition_color w-full text-[18px]'
                        onClick={handleOpen}
                    >
                        {title}
                        <ChevronDown size={32} className=' ' />
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
