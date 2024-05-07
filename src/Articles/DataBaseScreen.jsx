import React from 'react'
import {
    Title,
    Paragraph,
    Element,
    Space,
    PurpleTitle,
    GreenTitle,
    BlueTitle
} from '../Components/PageTextsComponent'
import {
    BlueSection,
    BlueWordSection,
    GreenSection,
    GreenWordSection,
    PurpleSection,
    PurpleWordSection
} from '../Components/SectionsComponent'
import { BackButton } from '../Components/BackButtonComponent'
import { KeyRound } from 'lucide-react'
import 'animate.css'

const DataBase = () => {
    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Jerarquía de datos
                </Title>
                <Paragraph>
                    Todo dato se puede asociar a un nivel en la jerarquía de datos.
                    Esta abarca desde las unidades más pequeñas,
                    hasta conjuntos de unidades.
                </Paragraph>

                <Space />

                <div className='flex gap-16'>
                    <PurpleSection>
                        <PurpleTitle>
                            Jerarquía de datos
                        </PurpleTitle>
                        <Element>
                            <PurpleWordSection>● Bit</PurpleWordSection>: representa un 1 o un  0.
                        </Element>
                        <Element>
                            <PurpleWordSection>● Byte</PurpleWordSection>: conjunto de 8 Bits, representa un carácter.
                        </Element>
                        <Element>
                            <PurpleWordSection>● Campo</PurpleWordSection>: conjunto de Bytes, representa una palabra.
                        </Element>
                        <Element>
                            <PurpleWordSection>● Registro</PurpleWordSection>: un conjunto de campos
                        </Element>
                        <Element>
                            <PurpleWordSection>● Tablas</PurpleWordSection>: un conjuto de registros
                        </Element>
                        <Element>
                            <PurpleWordSection>● Archivo</PurpleWordSection>: un conjunto de tablas
                        </Element>
                        <Element>
                            <PurpleWordSection>● Base de datos</PurpleWordSection>: un conjunto de archivos
                        </Element>
                    </PurpleSection>

                    <BlueSection>
                        <BlueTitle>
                            Tablas, campos y registros:
                        </BlueTitle>
                        <Element>
                            ● Están compuestas por <BlueWordSection>campos y registros.</BlueWordSection>
                        </Element>
                        <Element>
                            <BlueWordSection>● Un campo</BlueWordSection>: de una tabla hace referencia a una columna en tal tabla.
                        </Element>
                        <Element>
                            <BlueWordSection>● Un registro </BlueWordSection>: en una tabla es una fila.
                        </Element>
                    </BlueSection>
                </div>
                <Space />

                <Title>
                    Llaves
                </Title>

                <Paragraph>
                    Tienen la función de ayudarnos a identificar un registro en un atabla
                </Paragraph>

                <Space />

                <GreenSection>
                    <GreenTitle>
                        Tipos de llaves
                        <KeyRound />
                    </GreenTitle>

                    <Element>
                        <GreenWordSection>● Llave primaria (primary key)</GreenWordSection>: identificador único que ayuda a encontrar un registro en una tabla.
                    </Element>
                    <Element>
                        <GreenWordSection>● Llave Alterna</GreenWordSection>: es una potencial llave primaria. También puede encontrar un registro en una tabla.
                    </Element>
                    <Element>
                        <GreenWordSection>● Súper llave</GreenWordSection>: es un conjunto de campos, es decir 2 campos, que ayuda a encontrar un registro en una tabla.
                    </Element>
                    <Element>
                        <GreenWordSection>● Llave Foránea</GreenWordSection>: un campo que hace referencia a una llave primaria en otra tabla.
                    </Element>
                </GreenSection>

                <Space />

                <Title>
                    Diagramas Entidad-Relación
                </Title>
                <Paragraph>
                    Un diagrama entidad-relación es una representación gráfica de una base de datos relacional.
                </Paragraph>

                <Space />

                <Title>
                    Cardinalidad
                </Title>
                <Paragraph>

                </Paragraph>

            </div>
            <BackButton />
        </>
    )
}

export { DataBase }
