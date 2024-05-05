import React from 'react'
import StructureData from '../../../Images/Estructura-de-datos.png'
import { CodeComponent } from '../../CodeComponent/CodeComponent'
import { BackButton } from '../../BackButton/BackButton'
import { Accordion } from '../../AccordionComponent/Accordion'
import {
    Title,
    Space,
    Paragraph,
    Subtitle,
    GreenTitle,
    PurpleTitle,
    BlueTitle,
} from '../../PageTexts/PageText';
import {
    BlueSection,
    GreenSection,
    PurpleSection
} from '../../Sections/Section'
import "animate.css"

const DataStructure = () => {

    const stringVect =
        ` let animals = ['Dog', 'Cat', 'Lion', 'Bird'];
 console.log(animals[0]);
 //En consola se mostrará Dog que es el índice 0 `

    const stringMat =
        ` let animals = [
  ['Lion', 'Dog'],
  ['Elephant', 'Cat'],
 ];
 console.log(animals[1][0]);
 //En consola se mostrará Lion `

    const stringRec =
        `const animal = { nombre: "Fido", especie: "Perro", edad: 5 };
console.log(animal.especie)
//En consola se mostrará Perro`

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
                    <img src={StructureData} width={900} />
                </Accordion>

                <Space />

                <Title>
                    Estructuras de Datos Estáticas
                </Title>
                <Paragraph>
                    Una estructura de datos estática es aquella cuyo tamaño no puede cambiar en tiempo de ejecución.
                    Existen dos principales tipos de estructuras de datos estáticas: los arreglos y los registros.
                </Paragraph>
                <Space />

                <Title>
                    Arreglos
                </Title>
                <Paragraph>
                    Los arreglos son estructuras de datos estáticas que almacenan datos del mismo tipo.
                    Cada dato en un arreglo tiene un espacio asigando,
                    llamado índice, que empieza en 0, este espacio es en pocas palabras su posición.
                </Paragraph>

                <Space />

                <Subtitle>
                    Tipos:
                </Subtitle>

                <Space />

                <div className='flex gap-16'>
                    <GreenSection>
                        <GreenTitle>
                            ● Vector
                        </GreenTitle>
                        <Paragraph>
                            Un vector es una estructura de datos que almacena elementos en orden y se accede a
                            cada elemento usando un único índice. Es unidimensional
                        </Paragraph>
                        <Space />

                        <CodeComponent codeString={stringVect} />
                    </GreenSection>

                    <PurpleSection>
                        <PurpleTitle>
                            ● Matrices
                        </PurpleTitle>
                        <Paragraph>
                            Para acceder a un elemento en una matriz
                            se ocupan dos índices, un índice para la fila y otro índice para la columna.
                        </Paragraph>
                        <Space />

                        <CodeComponent codeString={stringMat} />
                    </PurpleSection>
                </div>

                <Space />

                <Title>
                    Registros
                </Title>
                <Paragraph>
                    Son estructuras de datos estáticas que almacenan datos de distintos tipos en un mismo bloque continuo de memoria. Cada dato en un registro tiene asignado un identificador único textual,
                    llamado llave.
                </Paragraph>

                <Space />

                <BlueSection>
                    <BlueTitle>
                        Ejemplo:
                    </BlueTitle>
                    <Space />

                    <CodeComponent codeString={stringRec} />
                </BlueSection>

                <Space />
                
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
