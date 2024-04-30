import React from 'react'
import { Title, Paragraph, Element, Space, BlueTitle } from '../../../PageTexts/PageText';
import { BlueSection } from '../../../Sections/Section'
import './Styles/Pseudocodigo.css'


const Pseudocodigo = () => {
  return (
    <>
      <Title>
        Pseudocódigos
      </Title>
      <Paragraph>
        Es una forma de escribir algoritmos utilizando un lenguaje simple y estructurado que se parece mucho al lenguaje humano.
      </Paragraph>

      <Space />
      
      <BlueSection>
        <BlueTitle>Inicio</BlueTitle>
        <Element>Definir num1, num2, suma como Entero;</Element>
        <Element>Leer num1;</Element>
        <Element>Leer num2;</Element>
        <Element>suma = num1 + num2;</Element>
        <Element>Mostras suma;</Element>
        <BlueTitle>Fin</BlueTitle>
      </BlueSection>

      <Space />
    </>
  )
}

export { Pseudocodigo }