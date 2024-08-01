import React, { useState } from 'react'
import DataStructureSvg from '../../public/DataStructure.svg'
import { CodeComponent } from '../Components/CodeComponent'
import { BackButton } from '../Components/BackButtonComponent'
import { Accordion } from '../Components/AccordionComponent'
import { FiFoExample } from '../Components/FiFoExample'
import { LiFoExample } from '../Components/LiFoExample'
import {
    Title,
    Space,
    Paragraph,
    Subtitle,
    GreenTitle,
    PurpleTitle,
    BlueTitle,
    RedTitle,
    Element,
} from '../Components/PageTextsComponent';
import {
    BlueSection,
    BlueWordSection,
    GreenSection,
    GreenWordSection,
    PurpleSection,
    RedSection,
    RedWordSection,
    PurpleWordSection,
    GreenSectionLine,
    PurpleSectionLine
} from '../Components/SectionsComponent'
import 'animate.css'

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
        `const animal = { name: 'Dockey Huntey', specie: 'Dog', age: 5 };
console.log(animal.especie)
//En consola se mostrará Perro`

    const stringRec2 =
        `const animal = { name: 'Chase', specie: 'Cat', age: 4 };
console.log(animal.especie)
//En consola se mostrará Cat`

    const stringBurbleSort =
        `function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = 0; j < arr.length - 1 - i; j++)
          if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
        
// Ejemplo de uso
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arr);
bubbleSort(arr);
console.log("Ordenado:", arr);
        ;`

    const stringInsertionSort =
        `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Ejemplo de uso
let arr = [64, 34, 25, 12, 22, 11, 90];`

    const stringSelectionSort =
        `function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// Ejemplo de uso
let arr = [64, 34, 25, 12, 22, 11, 90];`

    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Datos
                </Title>
                <Paragraph>
                    Los datos pueden ser una unidad, puede ser número, letras o simplemente
                    algún caracter, pero, al interpretar estos, se pueden convertir en información
                    sumamente importante
                </Paragraph>
                <Space />

                <Title>
                    Estructuras de datos
                </Title>
                <Paragraph>
                    Las estructuras de datos son todos aquellos mecanismos que permiten la organización de datos. Estos se clasifican en:
                </Paragraph>
                <Space />

                <Accordion title='Has click para ver la clasificación'>
                    <img src={DataStructureSvg} className='pointer-events-none' />
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

                <div className='flex gap-28'>
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

                <div className='flex gap-28'>
                    <BlueSection>
                        <BlueTitle>
                            Ejemplo:
                        </BlueTitle>
                        <Space />

                        <CodeComponent codeString={stringRec} />
                    </BlueSection>

                    <RedSection>
                        <RedTitle>
                            Otro ejemplo:
                        </RedTitle>
                        <Space />

                        <CodeComponent codeString={stringRec2} />
                    </RedSection>
                </div>

                <Space />

                <Title>
                    Algoritmos de Ordenamiento de Vectores
                </Title>
                <Paragraph>
                    Los algoritmos de ordenación son un conjunto de instrucciones que toman un arreglo o lista como entrada
                    y organizan los elementos en un orden particular.
                </Paragraph>

                <Space />

                <div className='flex gap-10'>
                    <BlueSection>
                        <BlueTitle>
                            Ordenamiento de Burbuja
                        </BlueTitle>
                        <Paragraph>
                            Compara elementos adyacentes y
                            los intercambia si están en el orden incorrecto.
                            Este proceso se repite hasta que la lista esté ordenada.
                            Es simple pero puede ser ineficiente para listas grandes.
                        </Paragraph>
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Ordenamiento por Selección
                        </PurpleTitle>
                        <Paragraph>
                            Ordena una lista encontrando el elemento más pequeño y colocándolo en su lugar
                            correcto repetidamente hasta que toda la lista esté ordenada.
                        </Paragraph>
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Ordenamiento por Inserción
                        </GreenTitle>
                        <Paragraph>
                            Ordena una lista comparando cada elemento con los elementos anteriores, comenzando desde el segundo elemento.
                            Si un elemento es menor que el que está antes que él,
                            se intercambian. Esto hasta que se ordene el arreglo.
                        </Paragraph>
                    </GreenSection>
                </div>

                <Space />

                <div className='flex flex-wrap gap-5'>
                    <BlueSection>
                        <BlueTitle>
                            Ejemplo de Ordenamiento de Burbuja:
                        </BlueTitle>
                        <Space />
                        <CodeComponent codeString={stringBurbleSort} />
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Ejemplo de Ordenamiento por Selección:
                        </PurpleTitle>
                        <Space />
                        <CodeComponent codeString={stringSelectionSort} />
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Ejemplo de Ordenamiento por Inserción:
                        </GreenTitle>
                        <Space />
                        <CodeComponent codeString={stringInsertionSort} />
                    </GreenSection>
                </div>

                <Space />

                <Title>
                    Estructuras de Datos Dinámicas
                </Title>
                <Paragraph>
                    Una estructura de datos dinámica es aquella cuyo tamaño puede cambiar. Se clasifican en lineales y no lineales. El principal protagonista es el nodo.
                    Están compuestas de varios nodos que apuntan entre sí.
                </Paragraph>

                <Space />

                <Title>
                    Nodos
                </Title>
                <Paragraph>
                    Es una estructura de datos tipo registro que es la unidad mínima un espacio para un puntero y uno para un dato. Posee:
                </Paragraph>

                <Space />

                <RedSection>
                    <RedTitle>
                        Caracteristicas:
                    </RedTitle>
                    <Element>
                        <RedWordSection>● Campo de datos</RedWordSection>: Guarda la información principal que queremos almacenar
                    </Element>
                    <Element>
                        <RedWordSection>● Campo de enlace o referencia</RedWordSection>: Almacena el siguiente nodo relacionado a un puntero
                    </Element>
                </RedSection>

                <Space />

                <Title>
                    Estructuras de Datos Dinámicas Lineales
                </Title>
                <Paragraph>
                    Son aquellas en las que los elementos ocupan lugares sucesivos en la estructura y cada uno de ellos tiene un único sucesor
                    y un único predecesor, es decir, sus elementos están ubicados uno al lado del otro relacionados en forma lineal.
                </Paragraph>

                <Space />

                <Title>
                    Listas enlazadas
                </Title>
                <Paragraph>
                    Las listas enlazadas, también conocidas como arreglos dinámicos, son estructuras de datos lineales que almacenan datos del mismo tipo. Se componen de nodos, cada uno con un campo de puntero que apunta al siguiente nodo en la secuencia, excepto el último nodo que apunta a una dirección nula.
                    Las listas enlazadas son fundamentales en la programación debido a su capacidad para gestionar datos de manera dinámica y eficiente.
                </Paragraph>

                <Space />

                <Title>
                    Pilas o FIFO's y Colas o LIFO's
                </Title>

                <Space />

                <div className='flex flex-wrap gap-x-20 gap-y-10'>
                    <GreenSection>
                        <GreenTitle>
                            Pilas o FIFO's (First In First Out)
                        </GreenTitle>
                        <Space />
                        <Paragraph>
                            Comportamiento específico de una lista enlazada, principales características:
                        </Paragraph>
                        <Space />
                        <Element>
                            <GreenWordSection>● Solo se pueden ingresar elementos al final</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Solo se pueden extraer elementos al final</GreenWordSection>
                        </Element>
                    </GreenSection>

                    <GreenSectionLine>
                        <FiFoExample />
                        <Space />
                    </GreenSectionLine>

                    <PurpleSection>
                        <PurpleTitle>
                            Colas o LIFO's (Last In First Out)
                        </PurpleTitle>
                        <Space />
                        <Paragraph>
                            Comportamiento específico de una lista enlazada, principales características:
                        </Paragraph>
                        <Space />
                        <Element>
                            <PurpleWordSection>● Solo se pueden ingresar elementos al principio</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Solo se pueden extraer elementos al final</PurpleWordSection>
                        </Element>
                    </PurpleSection>

                    <PurpleSectionLine>
                        <LiFoExample />
                        <Space />
                    </PurpleSectionLine>
                </div>

                <Space />

                <Title>
                    Estructuras de datos no líneales
                </Title>
                <Paragraph>
                    son estructuras de datos dinámicas en las cuales no es necesario recorrer todos los elementos
                    anteriores para acceder a un elemento cualquiera en la estructura.
                </Paragraph>

                <Title>
                    Árboles binarios
                </Title>
                <Paragraph>
                    Los árboles son estructuras de datos dinámicas no lineales,
                    donde cada nodo en la estructura tiene al menos dos campos para almacenar punteros a otros nodos en la estructura.
                    Existen 2 tipos. Árboles Binario: Cada nodo almacena dos punteros y Árboles N-arios: cada nodo almacena más de dos punteros
                </Paragraph>

                <Space />

                <Subtitle>
                    Recorrido de los árboles:
                </Subtitle>

                <Space />

                <div className='flex gap-16'>
                    <BlueSection>
                        <BlueTitle>
                            Preorden: Raíz al inicio
                        </BlueTitle>
                        <Element>
                            <BlueWordSection>● Raíz</BlueWordSection>
                        </Element>
                        <Element>
                            <BlueWordSection>● Izquierda</BlueWordSection>
                        </Element>
                        <Element>
                            <BlueWordSection>● Derecha</BlueWordSection>
                        </Element>
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Enorden: Raíz al medio
                        </PurpleTitle>
                        <Element>
                            <PurpleWordSection>● Izquierda</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Raíz</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Derecha</PurpleWordSection>
                        </Element>
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Posorden: Raíz al final.
                        </GreenTitle>
                        <Element>
                            <GreenWordSection>● Izquierda</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Derecha</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Raíz</GreenWordSection>
                        </Element>
                    </GreenSection>
                </div>

                <Space />

                <Title>
                    Grafos
                </Title>
                <Paragraph>
                    Son estructuras de datos no líneales en las cuales cada nodo guarda una lista enlazada de referencias a otros nodos en la estructura. Esta característica permite que los nodos de un grafo
                    tengan un número variable de conexiones, lo que los distingue de los árboles, donde cada nodo tiene un número limitado de hijos.
                </Paragraph>

                <Space />

                <GreenSection>
                    <GreenTitle>
                        Los grafos se pueden clasificar en dirigidos o no dirigidos según el siguiente criterio.
                    </GreenTitle>
                    <Element>
                        <GreenWordSection>Dirigido</GreenWordSection>: si un nodo A apunta a un nodo B, no necesariamente B apunta a A.
                    </Element>
                    <Element>
                        <GreenWordSection>No dirigido</GreenWordSection>: Siempre que un nodo A apunte a un nodo B, entonces B también apunta a A.
                    </Element>
                </GreenSection>
            </div >
            <BackButton link={'/WebDev'} />
        </>
    )
}

export { DataStructure }
