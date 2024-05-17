import React, { useState } from 'react'
import {
    Title,
    Space,
    BlueTitle,
    PurpleTitle,
    GreenTitle
} from '../Components/PageTextsComponent'
import {
    BlueSection,
    PurpleSection,
    BlueWordSection,
    PurpleWordSection,
    GreenSection,
    GreenWordSection
} from '../Components/SectionsComponent'
import { BackButton } from '../Components/BackButtonComponent'

const Links = () => {

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
                    Enlances de las prácticas
                </Title>

                <Space />

                <div className='flex flex-wrap flex-col'>
                    <BlueSection>
                        <BlueTitle>
                            Práctica #1: Fundamentos de programación.
                        </BlueTitle>

                        <Space />

                        <BlueWordSection>
                            <span onClick={handleLink} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </BlueWordSection>
                    </BlueSection>

                    <Space />

                    <PurpleSection>
                        <PurpleTitle>
                            Práctica #2: algoritmos, pseudocódigos, diagramas y más.
                        </PurpleTitle>

                        <Space />

                        <PurpleWordSection>
                            <span onClick={handleLink2} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </PurpleWordSection>
                    </PurpleSection>

                    <Space />

                    <GreenSection>
                        <GreenTitle>
                            Práctica #3: estructura de datos
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink3} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </GreenWordSection>
                    </GreenSection>
                </div>
            </div>
            <BackButton />
        </>
    )
}

export { Links }
