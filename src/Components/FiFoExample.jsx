import React, { useState } from 'react'
import {
    GreenTitle,
    Space, 
    Element
} from './PageTextsComponent';
import { motion } from 'framer-motion';
import 'animate.css'
import { GreenWordSection } from './SectionsComponent';

const FiFoExample = () => {

    const [number, setNumber] = useState([]);

    const handleAddNumber = () => {
        if (number.length < 7) {
            setNumber([...number, number.length + 1]);
        }
    }

    const handleRemoveNumber = () => {
        if (number.length > 0) {
            const newNumber = [...number];
            newNumber.pop();
            setNumber(newNumber)
        }
    }
    return (
        <>
            <GreenTitle>
                Ejemplo de FIFO
            </GreenTitle>

            <Element>
                <GreenWordSection>● Si agregas un número, solo se agregará al final de la lista.</GreenWordSection>
            </Element>

            <Element>
                <GreenWordSection>● Si eliminas un número, solo se eliminará al final de la lista. </GreenWordSection>
            </Element>

            <Space />
            <div className='flex gap-5'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleAddNumber}
                    className='bg-green_word_section text-white p-3 rounded-lg'
                >
                    Agregar
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleRemoveNumber}
                    className='bg-green_word_section text-white p-3 rounded-lg'
                >
                    Eliminar
                </motion.button>
            </div>
            <Space/>
            <Space />
            {
                number.map((number) => (

                    <span className='animate__animated animate__rollIn text-[17px] font-bold mr-4 bg-green_section text-white text-5 p-4 rounded-lg'>
                        {number}
                    </span>
                ))
            }
        </>
    )
}

export { FiFoExample }

