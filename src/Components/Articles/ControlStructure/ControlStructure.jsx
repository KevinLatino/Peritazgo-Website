import React from 'react'
import simpleIf from '../../../Images/Simple-If.jpg'
import dobleIf from '../../../Images/Doble-if.png'
import multipleIf from '../../../Images/Multiple-if.png'
import { useState } from 'react'
import { ProcessBar } from '../../Process-Bar/ProcessBar'
import { BackButton } from '../../BackButton/BackButton'
import { MagicMotion } from 'react-magic-motion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import '../../../App/index.css'
import './ControlStructures.css'
import 'animate.css';
import '../../Articles/BasicKnowledge/BasicKnowledge'




const ControlStructure = () => {
  const [open, setOpen] = useState(false);

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
        <MagicMotion
          transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='conditional-types'
          >
            <button
              className='styles-button'
              onClick={() => setOpen(!open)}
            >
              Has click para ver las figuras
              <ChevronDown className='chevron-styles' size={32} />
            </button>
            {open && (
              <>
                <h2 className='subtitle'>Condicionales Simples</h2>
                <p>
                  Esta estructura condicional es la más simple, esta simplemente hace algo si
                  la condición lógica es cierta, y si no, no hace nada, Entrada-Proceso-Salida (E-P-S)
                </p>
                <img className='img-styles' src={simpleIf} width={300} />
                <h2 className='subtitle'>Condicionales Dobles</h2>
                <p>
                  Estas condición es muy parecida a la anterior, la única diferencia es que al comparar la condición lógica,
                  el condicional va a hacer algo aunque el resultado sea falso o verdadero
                </p>
                <img className='img-styles' src={dobleIf} width={375} />
                <h2 className='subtitle'>Condicionales Anidados</h2>
                <p>
                  Esta condición al igual que las anteriores es bastante parecida, la diferencia con las otras es que esta estructura
                  de control implementa otra condicional dentro de una condicional
                </p>
                <img className='img-styles' src={multipleIf} width={385} />
                <h2 className='subtitle'>Condicionales Múltiples</h2>
                <p>
                  Es muy parecido a las otras atenteriores, solamente que se ultiliza el switch
                </p>
              </>
            )}
          </motion.div>

        </MagicMotion>
        <h1 className="All-title">Estructuras de Control Repetitivas</h1>
        <p>
          Las estructuras de control repetitivas repiten la ejecución de estructuras de control específicas mientras se cumpla una condición lógica dada. Existen tres tipos de
          estructuras de control repetitivas: los ciclos para, los ciclos mientras y los ciclos hacer-mientras.
        </p>
        <h2>Tipos:</h2>
        <h2 className="subtitle">Ciclos Para (For)</h2>
        <p>
          Los ciclos para son estructuras de control repetitivas que contienen la inicialización de la variable con el valor inicial, la condición lógica
          y la instrucción de incremento o decremento, todo en una única y misma cláusula.
        </p>
        <h2 className="subtitle">Ciclos Mientras (While)</h2>
        <p>
          Los ciclos mientras son estructuras de control repetitivas que tienen la inicialización de la variable con el valor inicial, la condición lógica y
          la instrucción de incremento o decremento en distintas cláusulas.
        </p>
        <h2 className='subtitle'>Ciclos Hacer-Mientras (Do While)</h2>
        <p>
          Los ciclos hacer-mientras son estructuras de control repetitivas que al igual que los ciclos mientras, tienen sus elementos en distintas cláusulas. Sin embargo, a diferencia de los ciclos mientras,
          los ciclos hacer-mientras garantizan al menos una ejecución de las estructuras de control a ejecutar independientemente del valor inicial o la condición lógica.
        </p>
      </div>
      <BackButton />
    </>
  )
}

export { ControlStructure }