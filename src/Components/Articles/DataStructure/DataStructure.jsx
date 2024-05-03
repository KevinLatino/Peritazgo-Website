import React from 'react'
import { BackButton } from '../../BackButton/BackButton'
import { Accordion } from '../../AccordionComponent/Accordion'
import { 
    Title, 
    Space,
    Paragraph } from '../../PageTexts/PageText';
import StructureData from '../../../Images/Estructura-de-datos.png'
import { BlueSection } from '../../Sections/Section'
import "animate.css"

const DataStructure = () => {

    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Datos
                </Title>
                <Paragraph>
                    Los datos pueden es una unidad, puede ser número, letras o simplemente
                    algún caracter, pero, al interpretar estos, se pueden convertir en información
                    sumamente importante
                </Paragraph>
                <Space />

                <Title>
                    Estructuras de datos
                </Title>
                <Paragraph>
                    Las estructuras de datos son todos aquellos mecanismos que permiten la organización de datos.
                    Permite hacer de deshacer datos
                </Paragraph>
                <Space />

                <Accordion title='Has click para ver la clasificación'>
                    <img src={StructureData} width={850} />
                </Accordion>

                <Title>
                    Estructuras de Datos Estáticas
                </Title>
                <Paragraph>
                    Una estructura de datos estática es aquella cuyo tamaño no puede cambiar en tiempo de ejecución.
                    Existen dos principales tipos de estructuras de datos estáticas: los arreglos y los registros.
                </Paragraph>

                <Title>
                    Arreglos
                </Title>
                <Paragraph>
                    Son estructuras de datos estáticas que almacenan datos del mismo tipo en un mismo
                    bloque continuo de memoria. Cada dato en un arreglo tiene asignado una posición en cada dimensión, llamada índice, empezando en 0.
                    Existen dos tipos de arreglos especiales según su cantidad de dimensiones: los vectores y las matrices.
                </Paragraph>

                <h2>● Vector</h2>
                <Paragraph>
                    Son arreglos unidimensionales. Es decir, para acceder a un elemento en un vector se ocupa un único índice. Ejemplo:
                </Paragraph>

                <h2>● Matrices</h2>
                <p>
                    Son arreglos bidimensionales. Es decir, para acceder a un elemento en una matriz se ocupan dos índices,
                    un índice para la fila y otro índice para la columna. Ejemplos:
                </p>


                <h2>● Registros</h2>
                <Paragraph>
                    Son estructuras de datos estáticas que almacenan datos de distintos tipos en un mismo bloque continuo de memoria. Cada dato en un registro tiene asignado un identificador único textual,
                    llamado llave.
                </Paragraph>

                <Title>
                    Estructuras de Datos Dinámicas
                </Title>
                <Paragraph>
                    Una estructura de datos dinámica es aquella cuyo tamaño puede cambiar. Se clasifican en lineales y no lineales. El principal protagonista es el nodo.
                </Paragraph>

                <title>
                    Nodo
                </title>
                <BlueSection>
                    <p>● Un campo para almacenar un valor de un tipo arbitrario T</p>
                    <p>● Un campo para almacenar un puntero a T</p>
                </BlueSection>

            </div>
            <BackButton />
        </>
    )
}

export { DataStructure }
