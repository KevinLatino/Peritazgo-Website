import React from 'react'
import {
  Paragraph,
  Element,
  Space,
  PurpleTitle
} from '../../../Components/PageTextsComponent';
import {
  PurpleWordSection,
  PurpleSection
} from '../../../Components/SectionsComponent'


const Pseudocodigo = () => {
  return (
    <>
      <PurpleSection>

        <PurpleTitle>
          Pseudocódigos
        </PurpleTitle>
        <Paragraph>
          Es una forma de escribir algoritmos utilizando un lenguaje simple y estructurado que se parece mucho al lenguaje humano.
        </Paragraph>

        <Space />

        <div className='flex justify-center items-center'>
          <PurpleWordSection>
            <Space />
            <PurpleTitle>Inicio</PurpleTitle>
            <Element>Definir num como Entero;</Element>
            <Element>Escribir "Ingresa un número para saber si es par o no";</Element>
            <Element>Leer num;</Element>
            <Element>Si num % 2 == 0 entonces </Element>
            <Element>mostrar “El número es par”;</Element>
            <Element>Sino</Element>
            <Element>mostrar “El número es impar”;</Element>
            <PurpleTitle>Fin</PurpleTitle>
            <Space />
          </PurpleWordSection >
        </div >

      </PurpleSection>
    </>
  )
}

export { Pseudocodigo }