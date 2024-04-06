import React from 'react'
import './Styles/Pseudocodigo.css'


const Pseudocodigo = () => {
  return (
    <>
     <h1 className='All-title'>Pseudocódigos</h1>
     <p>Es una forma de escribir algoritmos utilizando un lenguaje simple y estructurado que se parece mucho al lenguaje humano.</p> 
     <section className='Pseudocodigo-Examples'>
        <p>Inicio</p>
        <p>Definir num1, num2, suma como Entero;</p>
        <p>Leer num1;</p>
        <p>Leer num2;</p>
        <p>suma = num1 + num2;</p>
        <p>Mostras suma;</p>
        <p>Fin</p>
     </section>
    </>
  )
}

export {Pseudocodigo}