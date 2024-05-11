import React, { useState } from 'react'
import { GreenSectionLine, GreenWordSection } from './SectionsComponent';
import { GreenTitle, Paragraph, Space } from './PageTextsComponent';
import 'animate.css'

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

            <Space />

            <div className='flex gap-5'>
                <button
                    onClick={handleAddNumber}
                    className='bg-green_section text-white p-3 rounded-lg'
                >
                    Agregar
                </button>

                <button
                    onClick={handleRemoveNumber}
                    className='bg-green_section text-white p-3 rounded-lg'
                >
                    Eliminar
                </button>
            </div>
            <Space />
            {
                number.map((number) => (

                        <span className='animate__animated animate__rollIn mr-2 bg-green_section text-white text-5 p-3 rounded-lg'>
                            {number}
                        </span>
                ))
            }
        </>
    )
}

export { FiFoExample }

