import React from 'react'
import { useState } from 'react'
import { BackButton } from '../../BackButton/BackButton'
import { ProcessBar } from '../../Process-Bar/ProcessBar'
import "animate.css"

const DataStructure = () => {

    const [openData, setOpenData] = useState(false);

    const handleOpenData = () => {
        setOpenData(!openData)
    }

    return (
        <>
            <ProcessBar />
            <div className='animate__animated animate__fadeInLeft'>
                <h1>Datos</h1>
                <p>
                    Los datos pueden es una unidad, puede ser número, letras o simplemente
                    algún caracter, pero, al interpretar estos, se pueden convertir en información
                    sumamente importante
                </p>


                <h1 className="All-title">Estructuras de datos</h1>
                <p>
                    Las estructuras de datos son todos aquellos mecanismos que permiten la organización de datos.
                </p>
                <h2 className="subtitle">Organización:</h2>
                <div className="container-data-structure">
                    <button
                   onClick={handleOpenData} 
                    >Has click para ver más</button>
                </div>

            </div>
            <BackButton />
        </>
    )
}

export { DataStructure }
