import React from 'react'
import { NotebookText } from 'lucide-react';
import { Asterisk } from 'lucide-react';
import {ProcessBar} from '../Process-Bar/ProcessBar'
import {BackButton} from '../BackButton/BackButton'
import './ExpressionScreen.css'

const ExpressionScreen = () => {
  return (
    <>
      <ProcessBar />
      <div className='animate__animated animate__fadeInLeft'>
        <h1 className='All-title'>Expresiones</h1>

        <p>Es una combinación de valores, variables, operadores y funciones que se evalúa para producir un resultado.
          Estos componentes pueden ser simples, como un número o una variable que contiene un valor,
          o más complejos, como una fórmula matemática o una llamada a una función.
        </p>

        <h1 className='All-title'>Valores</h1>

        <p>Un valor es una pieza de información que un programa puede entender y usar.</p>

        <section id='background-styles'>
          <h3>Tipos de valores</h3>
          <p>● Números: Representan valores numéricos, existen enteros o flotantes</p>
          <p>● Texto: Representa secuencias de caracteres.</p>
          <p>● Booleanos: Representan verdadero o falso.</p>
        </section>

        <h1 className='All-title'>Operadores Aritméticos</h1>
        <p>Los operadores aritméticos son símbolos especiales utilizados en programación para realizar operaciones matemáticas en
          valores numéricos.
        </p>
        <section id='operations-style'>
          <p>● Suma + Utilizado para sumar dos valores.</p>
          <p>● Resta - Utilizado para restar un valor de otro.</p>
          <p>● Multiplicación <Asterisk size={15}/>  Utilizado para multiplicar dos valores.</p>
          <p>● División / Utilizado para dividir un valor entre otro.</p>
          <p>● Mod %  Devuelve el residuo de la división de un valor entre otro.</p>
          <p>● Potenciación <Asterisk size={15} /><Asterisk size={15}/> o ^: Utilizado para elevar un valor a una potencia.</p>
        </section>


        <h1 className='All-title'>Operadores Relacionales</h1>
        <p>
          Los operadores relacionales son herramientas en programación que comparan valores entre sí
          para determinar si son iguales, diferentes, mayores o menores. Estos operadores devuelven un
          valor de verdadero o falso según el resultado de la comparación.
        </p>
        <section id='relations-styles'>
          <p>● num1 == num2: num1 y num2 tienen el mismo valor</p>
          <p>● num1 != num2 o num1  num2: num1 y num2 tienen distinto valor </p>
          <p>● num1 &lt; num2: num1 es menor que num2 </p>
          <p>● num1 &lt;= num2: num1 es menor o igual que num2</p>
          <p>● num1 &gt; num2: num1 es mayor que num2</p>
          <p>● num1 &gt;= num2: num1 es mayor o igual que num2</p>
        </section>

        <h1 className='All-title'>Operadores Lógicos</h1>
        <p>
          Los operadores lógicos indican operaciones lógicas
          entre valores de verdadero o falso, produciendo verdadero o falso.
          Para dos valores de verdadero o falso A y B
        </p>
        <section id="logical-operators">
          <p>A && B o A ∧ B: La conjunción de A y B, verdadero si ambos A y B son verdaderos</p>
          <p>A || B o A ∨  B: La disyunción de A y B, verdadero si al menos uno de A o B es verdadero</p>
          <p>!A o ¬A: La negación de A, verdadero si A es falso, falso si A es verdadero</p>
        </section>

        <section>
          <h1 className='All-title'>Expresiones Aritméticas</h1>
          <p>Si una expresión contiene exclusivamente operadores aritméticos, se dice que es
            una expresión aritmética. Por ende, este tipo de expresiones producen exclusivamente números.
          </p>

          <h1 className='All-title'>Expresiones Lógicas</h1>
          <p>
            Si una expresión contiene por lo menos un operador relacional,
            se dice que es una expresión lógica. Por ende, este tipo de
            expresiones producen exclusivamente verdadero o falso. Además, cabe
            la posibilidad de que se usen operadores lógicos.
          </p>

          <h1 className='All-title'>Condiciones Lógicas</h1>
          <p>Si una expresión lógica se usa en el contexto de una estructura de control condicional, se dice
            que es una condición lógica. Es decir, una expresión lógica se convierte en una condición
            lógica cuando dependiendo de esta se altera el flujo de ejecución.
          </p>

          <h1 className='All-title'>Evaluación</h1>
          <p>
            Para evaluar una expresión, se evalúa el uso de los distintos operadores en la expresión.
            El orden de evaluación de los operadores en la expresión es de la siguiente manera:
          </p>
          <section id='note-styles'>
            <ul>
              <h2 id='note-h2'>Nota  <NotebookText id='icon-book' /></h2>
              <li>
                Se evalúa lo que está adentro de los paréntesis, de adentro hacia afuera.
              </li>
              <br />
              <li>
                Se evalúan los operadores aritméticos, con la siguiente precedencia:   1.Potencias y raíces
                2. Negatividades 3. Multiplicaciones, divisiones y residuos 4. Sumas y restas
              </li>
              <br />
              <li>
                Se evalúan los operadores relacionales, con precedencia de izquierda a derecha
              </li>
              <br />
              <li>
                Se evalúan los operadores lógicos, con la siguiente precedencia:  1. Negaciones 2. Conjunciones 3. Disyunciones
              </li>
            </ul>
          </section>
        </section>
      </div>
      <BackButton />
    </>

  )
}

export { ExpressionScreen }
