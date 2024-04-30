import React from 'react'
import { BlueSection, GreenSection, PurpleSection, WordSection, PurpleWordSection } from '../../Sections/Section'
import { NotebookText } from 'lucide-react';
import { Asterisk } from 'lucide-react';
import { BackButton } from '../../BackButton/BackButton'
import { Title, Paragraph, Space, BlueTitle, Element, GreenTitle, PurpleTitle } from '../../PageTexts/PageText';

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
            <BlueTitle>Tipos de valores:</BlueTitle>
            <Element><WordSection>● Literales</WordSection>: son simplemente números o cadenas.</Element>
            <Element><WordSection>● Variables</WordSection>: Se referencian simplemente por la representación textual de su valor.</Element>
          </BlueSection>

          <PurpleSection>
            <PurpleTitle>Ejemplos:</PurpleTitle>
            <Element><PurpleWordSection>● Literales</PurpleWordSection>: El número 10 o una cadena de "caracteres".</Element>
            <Element><PurpleWordSection>● Variables</PurpleWordSection>:Asignación de una variable como: numero = 10.</Element>
          </PurpleSection>
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
          <Element>
            <WordSection>● Suma +</WordSection>: es utilizado para realizar la suma de dos valores.
          </Element>
          <Element>
            <WordSection>● Resta -</WordSection>: es utilizado para realizar una restar de dos valores.
          </Element>
          <Element>
            <WordSection>● Multiplicación<Asterisk size={15} /></WordSection>:  utilizado para multiplicar dos valores.
          </Element>
          <Element>
            <WordSection>● División /</WordSection>: utilizado para dividir un valor entre otro.
          </Element>
          <Element>
            <WordSection>● Mod % </WordSection>: devuelve el residuo de la división de un valor entre otro.
          </Element>
          <Element>
            <WordSection>● Potenciación <Asterisk size={15} /><Asterisk size={15} /> o ^</WordSection>: utilizado para elevar un valor a una potencia.
          </Element>
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
          <Element>
            <WordSection>● Num1 == Num2</WordSection>: Quiere dicir que Num1 y Num2 tienen el mismo valor
          </Element>
          <Element>
            <WordSection>● Num1 != Num2 o Num1 &lt;&gt;</WordSection>: Num2 Num1 y Num2 tienen distinto valor
          </Element>
          <Element>
            <WordSection>● Num1 &lt; Num2</WordSection>: Quiere decir que Num1 es menor que Num2
          </Element>
          <Element>
            <WordSection>● Num1 &lt;= Num2</WordSection>: Num1 es menor o igual que Num2
          </Element>
          <Element>
            <WordSection>● Num1 &gt; Num2</WordSection>: Quiere decir que Num1 es mayor que Num2
          </Element>
          <Element>
            <WordSection>● Num1 &gt;= Num2</WordSection>: Num1 es mayor o igual que Num2
          </Element>
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
          <Element>
            <WordSection>A && B o A ∧ B</WordSection>: La conjunción de A y B, verdadero si ambos A y B son verdaderos
          </Element>
          <Element>
            <WordSection>A || B o A ∨  B</WordSection>: La disyunción de A y B, verdadero si al menos uno de A o B es verdadero
          </Element>
          <Element>
            <WordSection>!A o ¬A</WordSection>: La negación de A, verdadero si A es falso, falso si A es verdadero
          </Element>
        </BlueSection>

        <Space />

        <Title>
          Tipos de expresiones:
        </Title>

        <Space />

        <div className='flex gap-3'>

          <BlueSection>

            <BlueTitle>
              Expresiones lógicas
            </BlueTitle>
            <Element>
              Si una expresión contiene por lo menos un operador relacional,
              se dice que es una expresión lógica.
            </Element>

            <Element>
              Hay posibilidad de que se usen operadores lógicos.
            </Element>

            <Element>
              <WordSection>Producen exclusivamente verdadero o falso</WordSection>
            </Element>

          </BlueSection>

          <PurpleSection>

            <PurpleTitle>
              Expresiones Aritméticas
            </PurpleTitle>

            <Element>
              Es cuando una expresión tiene exclusivamente operadores aritméticos.
            </Element>

            <PurpleTitle>Ejemplo:</PurpleTitle>

            <Element><PurpleWordSection>(5 + 3) * 2 - 4</PurpleWordSection></Element>

          </PurpleSection>

        </div>

        <Space />

        <Title>
          Condiciones Lógicas
        </Title>

        <Space />

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
              <WordSection>1. Negaciones</WordSection>
            </Element>
            <Element>
              <WordSection>2. Conjunciones</WordSection>
            </Element>
            <Element>
              <WordSection>3. Disyunciones</WordSection>
            </Element>
          </BlueSection>

        </div>

      </div>
      <BackButton />
    </>

  )
}

export { ExpressionScreen }
