import React from 'react'
import simpleIf from '../../../Images/Simple-If.jpg'
import dobleIf from '../../../Images/Doble-if.png'
import multipleIf from '../../../Images/Multiple-if.png'
import For from '../.././../Images/For.png'
import While from '../../../Images/While.png'
import doWhile from '../../../Images/DoWhile.png'
import { BackButton } from '../../BackButton/BackButton'
import { Accordion } from '../../AccordionComponent/Accordion'
import { Title, Paragraph, BlueTitle, Element, Space, PurpleTitle, GreenTitle } from '../../PageTexts/PageText';
import { BlueSection, GreenSection, PurpleSection } from '../../Sections/Section';
import 'animate.css';


const ControlStructure = () => {

  return (
    <>

      <div className='animate__animated animate__fadeInLeft'>
        <Title>
          Estructuras de Control
        </Title>

        <Paragraph>
          Las estructuras de control en desarrollo web son herramientas que
          permiten controlar el flujo de ejecución
          de un programa o aplicación web.
        </Paragraph>

        <Space />

        <Title>
          Estructuras de Control Secuenciales
        </Title>
        <Paragraph>
          Las estructuras de control secuenciales en programación simplemente se refieren a ejecutar una instrucción
          después de otra en orden. Es como seguir los pasos de una receta de cocina uno tras otro, sin saltarse ninguno.
        </Paragraph>

        <Space />

        <BlueSection>
          <BlueTitle>
            Inicio
          </BlueTitle>

          <Element>
            base = 5
          </Element>

          <Element>
            altura = 3
          </Element>

          <Element>
            area = base * altura
          </Element>

          <Element>
            Escribir "El área del rectángulo es: ", area
          </Element>
          <BlueTitle>
            Fin
          </BlueTitle>
        </BlueSection>

        <Space />

        <Title>
          Estructuras de control condicionales o selectivas
        </Title>
        <Paragraph>
          Permiten ejecutar
          ciertas instrucciones o bloques de código basándose en condiciones específicas.
          Estas condiciones suelen evaluarse como verdaderas o falsas.
        </Paragraph>
        <h2>Tipos:</h2>

        <Accordion title='Has click para ver más'>
          <BlueTitle>Condicionales Simples</BlueTitle>
          <Paragraph>
            Esta estructura condicional es la más simple, esta simplemente hace algo si
            la condición lógica es cierta, y si no, no hace nada, Entrada-Proceso-Salida (E-P-S)
          </Paragraph>

          <Space />

          <img src={simpleIf} width={300} />

          <Space />

          <BlueTitle >Condicionales Dobles</BlueTitle>
          <Paragraph>
            Estas condición es muy parecida a la anterior, la única diferencia es que al comparar la condición lógica,
            el condicional va a hacer algo aunque el resultado sea falso o verdadero
          </Paragraph>

          <img src={dobleIf} width={375} />

          <Space />
          <BlueTitle >Condicionales Anidados</BlueTitle>
          <Paragraph>
            Esta condición al igual que las anteriores es bastante parecida, la diferencia con las otras es que esta estructura
            de control implementa otra condicional dentro de una condicional
          </Paragraph>

          <img src={multipleIf} width={385} />
          <BlueTitle>Condicionales Múltiples</BlueTitle>
          <Paragraph>
            Es muy parecido a las otras atenteriores, solamente que se ultiliza el switch
          </Paragraph>
        </Accordion>

        <Space />

        <Title>
          Estructuras de Control Repetitivas o cíclicas
        </Title>
        <Paragraph>
          Las estructuras de control repetitivas repiten la ejecución de estructuras de control específicas mientras se cumpla una condición lógica dada. Existen tres tipos de
          estructuras de control repetitivas: los ciclos para, los ciclos mientras y los ciclos hacer-mientras.
        </Paragraph>

        <Space />

        <div className="flex gap-12">
          <BlueSection>
            <BlueTitle>Ciclos Para (For)</BlueTitle>
            <Paragraph>
              Los ciclos para (for) contienen la inicialización de la variable con el valor inicial, la condición lógica
             y el incremento o decremento, todo en la misma sentencia.
            </Paragraph>
            <Space />
            <img src={For} width={180} />
          </BlueSection>

          <PurpleSection>
            <PurpleTitle>Ciclos Mientras (While)</PurpleTitle>
            <Paragraph>
              Los ciclos mientras tienen la inicialización de la variable con el valor inicial, la condición lógica y
              la instrucción de incremento o decremento en distintas sentencias.
            </Paragraph>
            <Space />
            <img src={While} width={220} />
          </PurpleSection>

          <GreenSection>
          <GreenTitle>Ciclos Hacer-Mientras (Do While)</GreenTitle>
          <Paragraph>
            los ciclos hacer-mientras garantizan al menos una ejecución de las estructuras de control a ejecutar independientemente del valor inicial o la condición lógica.
          </Paragraph>
          <Space />
          <img src={doWhile} width={220} />
        </GreenSection>

        </div>


      </div>


      <BackButton />
    </>
  )
}

export { ControlStructure }