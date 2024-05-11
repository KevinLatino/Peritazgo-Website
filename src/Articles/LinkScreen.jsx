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


    const [hola, setHola] = useState(false);

    const handleClick2 = () => {
        setHola(!hola)
    }
    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>

                <Title>
                    Links de las prácticas
                </Title>

                <Space />

                <div className='flex flex-wrap flex-col'>
                    <BlueSection>
                        <BlueTitle>
                            Prática #1: Fundamentos de programación
                        </BlueTitle>

                        <Space />

                        <BlueWordSection>
                            <span onClick={handleLink} className='text-white cursor-pointer'>
                                Has click para ir a la para ir a la prática.
                            </span>
                        </BlueWordSection>
                    </BlueSection>

                    <Space />

                    <PurpleSection>
                        <PurpleTitle>
                            Prática #2: algoritmos, pseudocódigos, diagramas y más
                        </PurpleTitle>

                        <Space />

                        <PurpleWordSection>
                            <span onClick={handleLink2} className='text-white cursor-pointer'>
                                Has click para ir a la para ir a la prática.
                            </span>
                        </PurpleWordSection>
                    </PurpleSection>

                    <Space />

                    <GreenSection>
                        <GreenTitle>
                            Prática #3: Estructuras de datos
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink3} className='text-white cursor-pointer'>
                                Prática #3: Estructuras de datos
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
