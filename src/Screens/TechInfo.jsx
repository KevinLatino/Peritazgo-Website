import React from 'react'
import { BlueSection, PurpleSection, BlueWordSection, PurpleWordSection, GreenSection, GreenWordSection } from '../Components/SectionsComponent'
import { Title, Space, BlueTitle, PurpleTitle, GreenTitle } from '../Components/PageTextsComponent'

const TechInfo = () => {

    const handleLink = () => {
        window.open(`https://www.canva.com/design/DAGHYl1NgwQ/6hrp7GhwqZKtjmsL5dnIGg/edit?utm_content=DAGHYl1NgwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`)
    }

    const handleLink2 = () => {
        window.open(`https://www.canva.com/design/DAGGvB2ZGsk/BNHn1JEM0DmyvfV-MjYsRw/edit?utm_content=DAGGvB2ZGsk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`)
    }

    const handleLink3 = () => {
        window.open(`https://www.canva.com/design/DAGGvAMz5rU/xQOmJRx7JjTxN8xMVTvo1Q/edit`)
    }

    const handleLink4 = () => {
        window.open(`https://www.canva.com/design/DAGIHRSfkBU/8VxIa-tDP99phF77C0kx9w/edit?utm_content=DAGIHRSfkBU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`)
    }

    const handleLink5 = () => {
        window.open(`https://www.canva.com/design/DAGGvV3vUdE/NxWHrKYpeTxWmNKGb0lFEg/edit`)
    }

    const handleLink6 = () => {
        window.open(`https://www.canva.com/design/DAGHY8UJqE4/F2FFuIyOKo4Ix6UHAdR26A/edit`)
    }


    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>

                <Title>
                    Enlances de las presentaciones
                </Title>

                <Space />

                <div className='flex flex-wrap gap-y-6 gap-x-10 justify-center items-center'>
                    <BlueSection>
                        <BlueTitle>
                            Tecnologías digitales
                        </BlueTitle>

                        <Space />

                        <BlueWordSection>
                            <span onClick={handleLink} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </BlueWordSection>
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Eficiencia energética
                        </PurpleTitle>

                        <Space />

                        <PurpleWordSection>
                            <span onClick={handleLink2} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </PurpleWordSection>
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Fundamentos de la electricidad
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink3} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </GreenWordSection>
                    </GreenSection>

                    <GreenSection>
                        <GreenTitle>
                            Tendencias Tecnológicas
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink4} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </GreenWordSection>
                    </GreenSection>

                    <GreenSection>
                        <GreenTitle>
                            Eficiencia energética 2
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink5} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </GreenWordSection>
                    </GreenSection>

                    <GreenSection>
                        <GreenTitle>
                            Tecnologías visionarias
                        </GreenTitle>

                        <Space />

                        <GreenWordSection>
                            <span onClick={handleLink6} className='text-white cursor-pointer'>
                                Has click para ir a la práctica.
                            </span>
                        </GreenWordSection>
                    </GreenSection>
                </div>
            </div>
        </>
    )
}

export default TechInfo
