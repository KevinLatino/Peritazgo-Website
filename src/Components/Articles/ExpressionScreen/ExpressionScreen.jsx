import React from 'react'
import { BlueSection, GreenSection } from '../../Sections/Section'
import { NotebookText } from 'lucide-react';
import { Asterisk } from 'lucide-react';
import { BackButton } from '../../BackButton/BackButton'
import { Title, Paragraph, Space, BlueTitle, Element, GreenTitle } from '../../PageTexts/PageText';

const ExpressionScreen = () => {
  return (
    <>
      <div className='animate__animated animate__fadeInLeft'>

        <Title>
          Expresiones
        </Title>

        <Paragraph>
          Es una combinación de valores, variables, operadores y funciones que se evalúa para producir un resultado.
          Estos componentes pueden ser simples, como un número o una variable que contiene un valor,
          o más complejos, como una fórmula matemática o una llamada a una función.
        </Paragraph>

        <Space />

        <Title>
          Valores
        </Title>

        <Paragraph>
          Un valor es una pieza de información que un programa puede entender y usar.
        </Paragraph>

        <Space />

        <div className='flex gap-10'>
          <BlueSection>
            <BlueTitle>Tipos de valores</BlueTitle>
            <Element>● Números: Representan valores numéricos, existen enteros o flotantes</Element>
            <Element>● Texto: Representa secuencias de caracteres.</Element>
            <Element>● Booleanos: Representan verdadero o falso.</Element>
          </BlueSection>

          <BlueSection>
            <BlueTitle>Ejemplos</BlueTitle>
            <Element>● Modificar después</Element>
            <Element>● Hola como vas.</Element>
            <Element>● Booleanos: Representan verdadero o falso.</Element>
          </BlueSection>
        </div>

        <Space />

        <Title>
          Operadores Aritméticos
        </Title>

        <Paragraph>
          Los operadores aritméticos son símbolos especiales utilizados en programación para realizar operaciones matemáticas en
          valores numéricos.
        </Paragraph>

        <Space />

        <BlueSection>
          <Element>● Suma + Es utilizado para realizar la suma de dos valores.</Element>
          <Element>● Resta - Es utilizado para realizar una restar de dos valores.</Element>
          <Element>● Multiplicación <Asterisk size={15} />  Utilizado para multiplicar dos valores.</Element>
          <Element>● División / Utilizado para dividir un valor entre otro.</Element>
          <Element>● Mod %  Devuelve el residuo de la división de un valor entre otro.</Element>
          <Element>● Potenciación <Asterisk size={15} /><Asterisk size={15} /> o ^: Utilizado para elevar un valor a una potencia.</Element>
        </BlueSection>

        <Space />

        <Title>
          Operadores Relacionales
        </Title>
        <Paragraph>
          Los operadores relacionales son herramientas en programación que comparan valores entre sí
          para determinar si son iguales, diferentes, mayores o menores. Estos operadores devuelven un
          valor de verdadero o falso según el resultado de la comparación.
        </Paragraph>

        <Space />

        <BlueSection>
          <Element>● Num1 == Num2: Quiere dicir que Num1 y Num2 tienen el mismo valor</Element>
          <Element>● Num1 != Num2 o Num1  Num2: Num1 y Num2 tienen distinto valor </Element>
          <Element>● Num1 &lt; Num2: Quiere decir que Num1 es menor que Num2 </Element>
          <Element>● Num1 &lt;= Num2: Num1 es menor o igual que Num2</Element>
          <Element>● Num1 &gt; Num2: Quiere decir que Num1 es mayor que Num2</Element>
          <Element>● Num1 &gt;= Num2: Num1 es mayor o igual que Num2</Element>
        </BlueSection>

        <Space />

        <Title>
          Operadores Lógicos
        </Title>
        <Paragraph>
          Los operadores lógicos indican operaciones lógicas
          entre valores de verdadero o falso, produciendo verdadero o falso.
          Para dos valores de verdadero o falso A y B
        </Paragraph>

        <Space />

        <BlueSection>
          <Element>A && B o A ∧ B: La conjunción de A y B, verdadero si ambos A y B son verdaderos</Element>
          <Element>A || B o A ∨  B: La disyunción de A y B, verdadero si al menos uno de A o B es verdadero</Element>
          <Element>!A o ¬A: La negación de A, verdadero si A es falso, falso si A es verdadero</Element>
        </BlueSection>

        <Space />

        <Title>
          Expresiones Aritméticas
        </Title>
        <Paragraph>
          Si una expresión contiene exclusivamente operadores aritméticos, se dice que es
          una expresión aritmética. Por ende, este tipo de expresiones producen exclusivamente números.
        </Paragraph>

        <Space />

        <Title>
          Expresiones Lógicas
        </Title>
        <Paragraph>
          Si una expresión contiene por lo menos un operador relacional,
          se dice que es una expresión lógica. Por ende, este tipo de
          expresiones producen exclusivamente verdadero o falso. Además, cabe
          la posibilidad de que se usen operadores lógicos.
        </Paragraph>

        <Space />

        <Title>
          Condiciones Lógicas
        </Title>
        <Paragraph>
          Si una expresión lógica se usa en el contexto de una estructura de control condicional, se dice
          que es una condición lógica. Es decir, una expresión lógica se convierte en una condición
          lógica cuando dependiendo de esta se altera el flujo de ejecución.
        </Paragraph>

        <Space />
        
        <Title>
          Evaluación
        </Title>
        <Paragraph>
          Para evaluar una expresión, se evalúa el uso de los distintos operadores en la expresión.
          El orden de evaluación de los operadores en la expresión es de la siguiente manera:
        </Paragraph>

        <Space />

        <div className='flex gap-5'>

          <GreenSection>
            <GreenTitle >Nota  <NotebookText /> </GreenTitle>
            <Element>
              Se evalúa lo que está adentro de los paréntesis, de adentro hacia afuera.
            </Element>

            <Element>
              Se evalúan los operadores aritméticos, con la siguiente precedencia:
            </Element>

            <Element>
              1. Potencias y raíces.
            </Element>

            <Element>
              2. Negatividades.
            </Element>

            <Element>
              3. Multiplicaciones, divisiones, residuos.
            </Element>

            <Element>
              4. Sumas y restas.
            </Element>
            <Element>
              Se evalúan los operadores relacionales, con precedencia de izquierda a derecha
            </Element>
          </GreenSection>

          <BlueSection>
            <BlueTitle>También</BlueTitle>
            <Element>
              Se evalúan los operadores lógicos, con la siguiente precedencia:
            </Element>
            <Element>
              1. Negaciones
            </Element>
            <Element>
              2. Conjunciones
            </Element>
            <Element>
              3. Disyunciones
            </Element>
          </BlueSection>

        </div>

      </div>
      <BackButton />
    </>

  )
}

export { ExpressionScreen }
