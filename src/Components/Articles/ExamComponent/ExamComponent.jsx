import React from 'react'
import { Subtitle, Title, Space } from '../../PageTexts/PageText'
import { BlueWordSection } from '../../Sections/Section'

const ExamComponent = () => {

    const handleLink = () => {
        window.open(`https://drive.google.com/file/d/1A9CjxUoFWQtmrJO5irtd4boaxsPNpaht/view?usp=sharing'`)
    }

    const handleLink2 = () => {
        window.open(`https://drive.google.com/file/d/1lMXJ89Rj6HBT3snT9vO9PaXX2FPqtFnk/view?usp=sharing2`)
    }

    const handleLink3 = () => {
        window.open(`https://drive.google.com/file/d/1ru9j36a1JCfQsmbNmzEwEyeVWD97Wlz5/view?usp=sharing`)
    }

    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Prática #1: Fundamentos de programación
                </Title>

                <Space />

                <BlueWordSection>
                    <span onClick={handleLink} className='text-blue_text'>
                        Práctica #1: fundamentos de programación
                    </span>
                </BlueWordSection>

                <Space />

                <Title>
                    Prática #2: algoritmos, pseudocódigos, diagramas y más
                </Title>

                <span onClick={handleLink2} className='text-purple_text'>
                    Prática #2: algoritmos, pseudocódigos, diagramas y más
                </span>

                <Space />

                <Title>
                    Prática #3: Estructuras de datos
                </Title>

                <Space />
                
                <span onClick={handleLink3} className='text-green_text'>
                    Prática #3: Estructuras de datos
                </span>
            </div>
        </>
    )
}

export { ExamComponent }
