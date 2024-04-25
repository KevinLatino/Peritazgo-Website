import React from 'react'
import { Title } from '../../../TitleText/Title'
import { BlueSection } from '../../../SectionText/Section'
import './Styles/Pseudocodigo.css'


const Pseudocodigo = () => {
  return (
    <>
      <Title>
        Pseudocódigos
      </Title>
      <p>Es una forma de escribir algoritmos utilizando un lenguaje simple y estructurado que se parece mucho al lenguaje humano.</p>

      <BlueSection>
        <p>Inicio</p>
        <p>Definir num1, num2, suma como Entero;</p>
        <p>Leer num1;</p>
        <p>Leer num2;</p>
        <p>suma = num1 + num2;</p>
        <p>Mostras suma;</p>
        <p>Fin</p>
      </BlueSection>
    </>
  )
}

export { Pseudocodigo }