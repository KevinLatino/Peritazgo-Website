import React, { useState } from 'react';
import { PurpleTitle, Space } from './PageTextsComponent';

const LiFoExample = () => {
    const [numbers, setNumbers] = useState([]);

    const handleAdd = () => {
        if (numbers.length <= 7) {
            setNumbers([7 - numbers.length, ...numbers]);
        }
    }

    const handleRemove = () => {
        if (numbers.length > 0) {
            const newNumbers = [...numbers];
            newNumbers.pop();
            setNumbers(newNumbers);
        }
    }

    return (
        <>
            <PurpleTitle>
                Ejemplo de LIFO
            </PurpleTitle>
            <Space />
            <div className='flex gap-2'>
                <button
                    onClick={handleAdd}
                    className='bg-purple_section text-white p-3 rounded-lg'
                >
                    Agregar
                </button>

                <Space />
                <button
                    onClick={handleRemove}
                    className='bg-purple_section text-white p-3 rounded-lg'
                >
                    Eliminar
                </button>
            </div>
            <Space />
            {
                numbers.map((number) => (
                    <span key={number} className='animate__animated animate__rollIn mr-2 bg-green_section text-white text-5 p-3 rounded-lg'>
                        {number}
                    </span>
                ))
            }
        </>
    )
}

export { LiFoExample };
