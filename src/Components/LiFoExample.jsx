import React, { useState } from 'react';
import {
    PurpleTitle,
    Space
} from './PageTextsComponent';
import { motion } from 'framer-motion';
import 'animate.css'



const LiFoExample = () => {

    const [stack, setStack] = useState([]);
    const [nextNumber, setNextNumber] = useState(1);

    const handleAdd = () => {
        if (stack.length < 7) {
            setStack([nextNumber, ...stack]);
            setNextNumber(nextNumber + 1);
        }
    }

    const handleRemove = () => {
        if (stack.length > 0) {
            const newNumbers = [...stack];
            newNumbers.pop();
            setStack(newNumbers);
        }
    }

    return (
        <>
            <PurpleTitle>
                Ejemplo de LIFO
            </PurpleTitle>
            <Space />
            <div className='flex gap-2'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleAdd}
                    className='bg-purple_word_section text-white p-3 rounded-lg'
                >
                    Agregar
                </motion.button>

                <Space />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleRemove}
                    className='bg-purple_word_section text-white p-3 rounded-lg'
                >
                    Eliminar
                </motion.button>
            </div>
            <Space />
            {
                stack.map((number) => (
                    <span key={number} className='animate__animated animate__rollIn mr-2 bg-purple_section text-white text-5 p-3 rounded-lg'>
                        {number}
                    </span>
                ))
            }
        </>
    )
}

export { LiFoExample };
