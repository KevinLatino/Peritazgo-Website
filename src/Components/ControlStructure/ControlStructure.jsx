import React from 'react'
import { ProcessBar } from '../Process-Bar/ProcessBar'
import { BackButton } from '../BackButton/BackButton'
import 'animate.css';
import SimpleIf  from '../../Images/Simple-If.jpg'
import DobleIf from '../../Images/Doble-if.jpg'
import MultipleIf from '../../Images/Multiple-if.png'
import './ControlStructures.css'



const ControlStructure = () => {

  return (
    <>
      <ProcessBar />
      <div className='animate__animated animate__fadeInLeft'>
        <h1 className='All-title'>Estructuras de Control</h1>
        <p>
          Las estructuras de control en desarrollo web son herramientas que permiten controlar el flujo de ejecución
          de un programa o aplicación web.
        </p>
        <h1 className='All-title'>Estructuras de Control Secuenciales</h1>
        <p>
          Las estructuras de control secuenciales en programación simplemente se refieren a ejecutar una instrucción
          después de otra en orden. Es como seguir los pasos de una receta de cocina uno tras otro, sin saltarse ninguno.
        </p>
        <section id='background-code'>
          <p>
            Inicio
          </p>

          <p>
            base = 5
          </p>

          <p>
            altura = 3
          </p>

          <p>
            area = base * altura
          </p>

          <p>
            Escribir "El área del rectángulo es: ", area
          </p>

          <p>
            Fin
          </p>
        </section>
        <h1 className='All-title'>Estructuras de control condicionales o selectivas</h1>
        <p>
          Permiten ejecutar
          ciertas instrucciones o bloques de código basándose en condiciones específicas.
          Estas condiciones suelen evaluarse como verdaderas o falsas. Tipos de estructuras condicionales:
        </p>
        <h2>● Condicionales Simples</h2>
          <p>
            Esta estructura condicional es la más simple, esta simplemente hace algo si
            la condición lógica es cierta, y si no, no hace nada, Entrada-Proceso-Salida (E-P-S)
          </p>
          <img className='img-styles'src={SimpleIf} width={320} />
        <h2>● Condicionales Dobles</h2>
        <p>
          Estas condición es muy parecida a la anterior, la única diferencia es que al comparar la condición lógica,
          el condicional va a hacer algo aunque el resultado sea falso o verdadero
        </p>
        <img className='img-styles'src={DobleIf} width={350} />
        <h2>● Condicionales Anidados</h2>
        <p>
          Esta condición al igual que las anteriores es bastante parecida, la diferencia con las otras es que esta estructura
          de control implementa otra condicional dentro de una condicional
        </p>
        <img className='img-styles'src={MultipleIf} width={350} />
        <h2>● Condicionales Múltiples</h2>
        <p>
          Es muy parecido a las otras atenteriores, solamente que se ultiliza el switch
        </p>
      </div>
      <BackButton />
    </>
  )
}

export { ControlStructure }