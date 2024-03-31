import React from 'react'

const ExpressionScreen = () => {
  return (
    <>
     <h1>Expresiones</h1>

     <p>es una combinación de valores, variables, operadores y funciones que se evalúa para producir un resultado.
         Estos componentes pueden ser simples, como un número o una variable que contiene un valor, 
         o más complejos, como una fórmula matemática o una llamada a una función.
    </p>

    <h1>Valores</h1>

    <p>Un valor es una pieza de información que un programa puede entender y usar.</p>

    <section id='background-styles'>
        <h3>Tipos de valores</h3>
        <p>Números: Representan valores numéricos, existen enteros o flotantes</p>
        <p>Texto: Representa secuencias de caracteres.</p>
        <p>Booleanos: Representan verdadero o falso.</p>
    </section>

    <h1>Operadores Aritméticos</h1>
    <p>Los operadores aritméticos son símbolos especiales utilizados en programación para realizar operaciones matemáticas en 
       valores numéricos.
    </p>
    <section id='operations-style'>
        <p>Suma +: Utilizado para sumar dos valores.</p>
        <p>Resta -: Utilizado para restar un valor de otro.</p>
        <p>Multiplicación *: Utilizado para multiplicar dos valores.</p>
        <p>División /: Utilizado para dividir un valor entre otro.</p>
        <p>Módulo %: Devuelve el residuo de la división de un valor entre otro.</p>
        <p>Potenciación ** o ^: Utilizado para elevar un valor a una potencia.</p>
        <p>Incremento ++ y decremento --2: Utilizados para aumentar o disminuir el valor de una variable en 1 unidad.</p>
    </section>
    </>
  )
}

export {ExpressionScreen}
