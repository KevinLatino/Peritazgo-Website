import React from 'react'
import { Paragraph, Element, Space, BlueTitle, PurpleTitle } from '../../../PageTexts/PageText';
import { PurpleWordSection, PurpleSection } from '../../../Sections/Section'


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

        <PurpleWordSection>
          
          <Space />
          <PurpleTitle>Inicio</PurpleTitle>
          <Element>Definir num1, num2, suma como Entero;</Element>
          <Element>Leer num1;</Element>
          <Element>Leer num2;</Element>
          <Element>suma = num1 + num2;</Element>
          <Element>Mostras suma;</Element>
          <PurpleTitle>Fin</PurpleTitle>

          <Space />
        </PurpleWordSection >
      </PurpleSection>


      <Space />
    </>
  )
}

export { Pseudocodigo }