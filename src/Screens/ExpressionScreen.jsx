import React from 'react'
import {
  BlueSection,
  GreenSection,
  PurpleSection,
  BlueWordSection,
  PurpleWordSection,
  GreenWordSection,
  RedSection,
  RedWordSection
} from '../Components/SectionsComponent'
import {
  Title,
  Paragraph,
  Space,
  BlueTitle,
  Element,
  GreenTitle,
  PurpleTitle,
  RedTitle
} from '../Components/PageTextsComponent';
import { BackButton } from '../Components/BackButtonComponent'
import { NotebookText } from 'lucide-react';
import { Asterisk } from 'lucide-react';


const ExpressionScreen = () => {
  return (
    <>
      <div className='animate__animated animate__fadeInLeft'>

        <Title>
          Expresiones
        </Title>

        <Paragraph>
          Estos componentes pueden ser simples, como un número o una variable que contiene un valor. O también pueden ser una
          combinación de valores, variables, operadores y funciones que se evalúan para producir un resultado.
        </Paragraph>

        <Space />

        <Title>
          Valores
        </Title>

        <Paragraph>
          Un valor es una pieza de información que un programa puede entender y usar.
        </Paragraph>

        <Space />

        <div className='flex justify-center gap-28'>
          <BlueSection>
            <BlueTitle>Tipos de valores:</BlueTitle>
            <Element>
              <BlueWordSection>● Literales</BlueWordSection>: son simplemente números o cadenas.
            </Element>

            <Element>
              <BlueWordSection>● Variables</BlueWordSection>: se referencian por la representación textual de su valor..
            </Element>

          </BlueSection>

          <PurpleSection>
            <PurpleTitle>Ejemplos:</PurpleTitle>

            <Element>
              <PurpleWordSection>● Literales</PurpleWordSection>: el número 10 o una cadena de "caracteres".
            </Element>

            <Element>
              <PurpleWordSection>● Variables</PurpleWordSection>: asignación de una variable como: numero = 10.
            </Element>
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

        <div className='flex justify-center gap-12'>
          <GreenSection>
            <GreenTitle>Ejemplos:</GreenTitle>
            <Element>
              <GreenWordSection>● Suma +</GreenWordSection>: es utilizado para realizar la suma de un valor y otro.
            </Element>

            <Element>
              <GreenWordSection>● Resta -</GreenWordSection>: es utilizado para realizar una restar de dos valores.
            </Element>

            <Element>
              <GreenWordSection>● Multiplicación<Asterisk size={15} /></GreenWordSection>: es utilizado para la multiplicación de dos valores.
            </Element>
          </GreenSection>

          <RedSection>
            <RedTitle>Ejemplos:</RedTitle>
            <Element>
              <RedWordSection>● División /</RedWordSection>: utilizado para dividir un valor entre otro.
            </Element>

            <Element>
              <RedWordSection>● Mod % </RedWordSection>: devuelve el residuo de una división.
            </Element>

            <Element>
              <RedWordSection>● Potenciación <Asterisk size={15} /><Asterisk size={15} /> o ^</RedWordSection>: utilizado para elevar un valor a una potencia.
            </Element>
          </RedSection>
        </div>
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

        <div className='flex justify-center gap-14'>
          <BlueSection>
            <BlueTitle>Ejemplos:</BlueTitle>
            <Element>
              <BlueWordSection>● Num1 == Num2</BlueWordSection>: Num1 y Num2 tienen el mismo valor.
            </Element>

            <Element>
              <BlueWordSection>● Num1 != Num2 o Num1 &lt;&gt; Num2</BlueWordSection>:   son diferentes.
            </Element>

            <Element>
              <BlueWordSection>● Num1 &lt; Num2</BlueWordSection>: Quiere decir que Num1 es menor que Num2.
            </Element>
          </BlueSection>

          <PurpleSection>
            <PurpleTitle>
              Ejemplos:
            </PurpleTitle>
            <Element>
              <PurpleWordSection>● Num1 &lt;= Num2</PurpleWordSection>: Num1 es menor o igual que Num2.
            </Element>

            <Element>
              <PurpleWordSection>● Num1 &gt; Num2</PurpleWordSection>: Quiere decir que Num1 es mayor que Num2.
            </Element>

            <Element>
              <PurpleWordSection>● Num1 &gt;= Num2</PurpleWordSection>: Num1 es mayor o igual que Num2.
            </Element>
          </PurpleSection>
        </div>



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
          <BlueTitle>Ejemplos:</BlueTitle>
          <Element>
            <BlueWordSection>A && B o A ∧ B</BlueWordSection>: La conjunción de A y B, verdadero si ambos A y B son verdaderos
          </Element>
          <Element>
            <BlueWordSection>A || B o A ∨  B</BlueWordSection>: La disyunción de A y B, verdadero si al menos uno de A o B es verdadero
          </Element>
          <Element>
            <BlueWordSection>!A o ¬A</BlueWordSection>: La negación de A, verdadero si A es falso, falso si A es verdadero
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
              <BlueWordSection>Producen exclusivamente verdadero o falso</BlueWordSection>
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
              <GreenWordSection>
                1. Potencias y raíces.
              </GreenWordSection>
            </Element>

            <Element>
              <GreenWordSection>
                2. Negatividades.
              </GreenWordSection>
            </Element>

            <Element>
              <GreenWordSection>3. Multiplicaciones, divisiones, residuos.</GreenWordSection>
            </Element>

            <Element>
              <GreenWordSection>4. Sumas y restas.</GreenWordSection>
            </Element>

            <Element>
              <GreenWordSection>Se evalúan los operadores relacionales, con precedencia de izquierda a derecha</GreenWordSection>
            </Element>
          </GreenSection>

          <BlueSection>
            <BlueTitle>
              Importante también considerar:
              <NotebookText />
            </BlueTitle>
            <Space />
            <BlueTitle>También</BlueTitle>
            <Element>
              Se evalúan los operadores lógicos, con la siguiente precedencia:
            </Element>
            <Element>
              <BlueWordSection>1. Negaciones</BlueWordSection>
            </Element>
            <Element>
              <BlueWordSection>2. Conjunciones</BlueWordSection>
            </Element>
            <Element>
              <BlueWordSection>3. Disyunciones</BlueWordSection>
            </Element>
          </BlueSection>

        </div>

      </div>
      <BackButton  />
    </>

  )
}

export { ExpressionScreen }
