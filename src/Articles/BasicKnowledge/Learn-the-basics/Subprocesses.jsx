import React from 'react'
import {
    Title,
    Paragraph,
    BlueTitle,
    Element,
    Space,
    PurpleTitle,
    GreenTitle,
    RedTitle
} from '../../../Components/PageTextsComponent'
import {
    BlueSection,
    BlueWordSection,
    GreenSection,
    GreenWordSection,
    PurpleSection,
    PurpleWordSection,
    RedSection,
    RedWordSection
} from '../../../Components/SectionsComponent'
import { CodeComponent } from '../../../Components/CodeComponent'

const Subprocesses = () => {

    const stringFunction =
        ` function Funcion (num1, num2) {
    num1 = 5;
    num2 = 10
    let result = num1 + num2; 
    return result;
    //los páramteros son num1 y num2
  }`

    const stringProcesses =
        `function procedimiento(num1, num2) {
    num1 = 5;
    num2 = 10
    let result = num1 + num2; 
    console.log(result);
    //los páramteros son num1 y num2
  }`
    return (
        <>
            <Title>
                Subprocesos
            </Title>
            <Paragraph>
                Un subproceso, en términos simples, es una pequeña tarea que se ejecuta dentro de un programa más grande.
                Los subprocesos poseen parámetros, los parámetros
                son básicamente variables que se utilizan para recibir valores cuando una función es llamada.
                Los subprocesos necesitan:
            </Paragraph>

            <Space />

            <div className='flex flex-wrap gap-x-20 gap-y-12'>
                <BlueSection>
                    <BlueTitle>
                        Requisitos
                    </BlueTitle>
                    <Element>
                        <BlueWordSection>Definición</BlueWordSection>: creación del subproceso.
                    </Element>
                    <Element>
                        <BlueWordSection>Invocación</BlueWordSection>: se necesita llamar al subproceso para que exista.
                    </Element>
                </BlueSection>

                <RedSection>
                    <RedTitle>
                        Se dividen en:
                    </RedTitle>
                    <Element>
                        <RedWordSection>Funciones</RedWordSection>: devuelven un valor al algoritmo principal.
                    </Element>
                    <Element>
                        <RedWordSection>Procedimientos</RedWordSection>: no devuelven un valor al algoritmo principal.
                    </Element>
                </RedSection>

                <Space />
                <PurpleSection>
                    <PurpleTitle>
                        <PurpleWordSection>Funciones:</PurpleWordSection> se puede apreciar que devuelve el resultado.
                    </PurpleTitle>
                    <Space />

                    <CodeComponent codeString={stringFunction} />
                </PurpleSection>

                <GreenSection>
                    <GreenTitle>
                        <GreenWordSection>Subprocesos:</GreenWordSection> se puede ver que no devuelve el resultado.
                    </GreenTitle>
                    <Space />

                    <CodeComponent codeString={stringProcesses} />
                </GreenSection>
            </div>
            <Space />
        </>
    )
}

export { Subprocesses }
