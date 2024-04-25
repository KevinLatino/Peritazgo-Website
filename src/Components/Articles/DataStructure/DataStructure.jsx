import React from 'react'
import { useState } from 'react'
import { BackButton } from '../../BackButton/BackButton'
import { Accordion } from '../../AccordionComponent/Accordion'
import { ProcessBar } from '../../Process-Bar/ProcessBar'
import "animate.css"

const DataStructure = () => {

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

                <Accordion title='Has click para ver más'>

                </Accordion>

                <h1 className="All-title">Estructuras de Datos Estáticas</h1>
                <p>
                    Una estructura de datos estática es aquella cuyo tamaño no puede cambiar en tiempo de ejecución.
                    Existen dos principales tipos de estructuras de datos estáticas: los arreglos y los registros.
                </p>

                <h1 className="All-title">Arreglos</h1>
                <p>
                    Los arreglos son estructuras de datos estáticas que almacenan datos del mismo tipo en un mismo bloque continuo de memoria. Cada dato en un arreglo tiene asignado una posición en cada dimensión, llamada índice, empezando en 0.
                    Existen dos tipos de arreglos especiales según su cantidad de dimensiones: los vectores y las matrices.
                </p>
                <h2>Tipos:</h2>

                <h2>Vector</h2>
                <p>
                    son arreglos unidimensionales. Es decir, para acceder a un elemento en un vector se ocupa un único índice.
                </p>

                <h2>Matrices</h2>
                <p>
                    son arreglos bidimensionales. Es decir, para acceder a un elemento en una matriz se ocupan dos índices, un índice para la fila y otro índice para la columna.
                </p>

            </div>
            <BackButton />
        </>
    )
}

export { DataStructure }
