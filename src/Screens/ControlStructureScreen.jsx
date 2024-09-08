import React from 'react'
import { BackButton } from '../Components/BackButtonComponent'
import { CodeComponent } from '../Components/CodeComponent'
import {
  Title,
  Paragraph,
  BlueTitle,
  Space,
  PurpleTitle,
  GreenTitle,
  RedTitle
} from '../Components/PageTextsComponent';
import {
  BlueSection,
  GreenSection,
  PurpleSection,
  RedSection
} from '../Components/SectionsComponent';
import 'animate.css';


const ControlStructure = () => {


  const stringArea =
    `  const base = 5;
  const height = 3;
  let area = base * height;
  console.log('La base del triángulo es ', area); `

  const stringIf =
    ` let age = 18;
 if (age >= 18){
    console.log('Eres mayor de edad');
  };`

  const stringDobleIf =
    `let age = 18;
  if (age >= 18){
    console.log('Eres mayor de edad');
  } else {
    console.log('Eres menor de edad')
  };`

  const stringMultipleIf =
    `let age = 18;
   if (age >= 18){
    console.log('Eres mayor de edad');
  } else if (age > 13 && < 18 ){
    console.log('Eres un adolescente')
  } else if (age < 13) {
    console.log('Eres un niño')
  };`

  const stringSwitch =
    `let age = 15;
  switch (true) {
    case age < 18:
      console.log('Eres menor de edad');
      break;
    case age >= 18:
      console.log('Eres mayor de edad');
      break;
  };`

  const stringFor =
    `for (let i=0; i<4; i++){
    console.log(i)
  };
  //En consola: 0, 1, 2, 3`

  const stringWhile =
    `let i = 0;
  while (i < 4){
    i++
    console.log(i)
  };
  //En consola: 0, 1, 2, 3`

  const stringDoWhile =
    `let i = 0;
  do {
    console.log(i)
    i++
  } while(i < 4);
  //En consola: 0, 1, 2, 3`

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
          Sin ellas, las instrucciones de un programa solo
          podrían ejecutarse en el orden en que están escritas (orden secuencial).
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
            Ejemplo del cálculo del área de un triángulo secuencialmente:
          </BlueTitle>
          <Space />
          <CodeComponent codeString={stringArea} />
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

        <Title>
          Tipos:
        </Title>
        <Space />

        <div className='flex gap-12'>

          <BlueSection>
            <BlueTitle>
              Condicionales Simples
            </BlueTitle>
            <Paragraph>
              Esta estructura condicional es la más simple, esta simplemente hace algo si
              la condición lógica es cierta, y si no, no hace nada.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringIf} />
          </BlueSection>

          <PurpleSection>
            <PurpleTitle>
              Condicionales Dobles
            </PurpleTitle>
            <Paragraph>
              Tiene 2 acciones alternativas, si la sentencia se cumple hace una, y si no se cumple hace la otra.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringDobleIf} />
          </PurpleSection>
        </div>

        <Space />

        <div className='flex gap-12'>
          <GreenSection>
            <GreenTitle >Condicionales Anidados</GreenTitle>
            <Paragraph>
              Permite implementar condicionales
              más complicados, en los que se “encadenan” condiciones. Es un condional, dentro de otro..
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringMultipleIf} />
          </GreenSection>

          <RedSection>
            <RedTitle>Condicionales Múltiples</RedTitle>
            <Paragraph>
              Dirige el flujo del programa hacia diferentes bloques de código según el valor de una expresión.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringSwitch} />
          </RedSection>
        </div>

        <Space />

        <Title>
          Estructuras de Control Repetitivas o cíclicas
        </Title>
        <Paragraph>
          Las estructuras de control repetitivas repiten la ejecución de estructuras de control específicas mientras se cumpla una condición lógica dada. Existen tres tipos de
          estructuras de control repetitivas: los ciclos para, los ciclos mientras y los ciclos hacer-mientras.
        </Paragraph>

        <Space />

        <div className='flex gap-12'>
          <BlueSection>
            <BlueTitle>
              Ciclos Para (For)
            </BlueTitle>
            <Paragraph>
              Contienen la inicialización de la variable con el valor inicial, la condición lógica
              y el incremento o decremento, todo en la misma sentencia.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringFor} />
          </BlueSection>

          <PurpleSection>
            <PurpleTitle>
              Ciclos Mientras (While)
            </PurpleTitle>
            <Paragraph>
              Tienen la inicialización de la variable con el valor inicial, la condición lógica y
              la instrucción de incremento o decremento en distintas sentencias.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringWhile} />
          </PurpleSection>

          <GreenSection>
            <GreenTitle>
              Ciclos Hacer-Mientras (Do While)
            </GreenTitle>
            <Paragraph>
              Garantizan al menos una ejecución de las estructuras de control a ejecutar independientemente del valor inicial o la condición lógica.
            </Paragraph>
            <Space />
            <CodeComponent codeString={stringDoWhile} />
          </GreenSection>

        </div>
      </div>

      <BackButton />
    </>
  )
}

export { ControlStructure }