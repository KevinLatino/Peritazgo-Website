import React from 'react'
import { BackButton } from '../../BackButton/BackButton'
import { ProcessBar } from '../../Process-Bar/ProcessBar'
import "animate.css"

const DataStructure = () => {
    return (
        <>
            <ProcessBar />
            <div className='animate__animated animate__fadeInLeft'>
                <h1>Datos</h1>
                <p>Los datos pueden es una unidad, puede ser número, letras o simplemente
                    algún caracter, pero, al interpretar estos, se pueden convertir en información
                    sumamente importante</p>
            </div>
            <BackButton />
        </>
    )
}

export { DataStructure }
