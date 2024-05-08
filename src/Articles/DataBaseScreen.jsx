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
import {
    KeyRound,
    Table,
    Rows3,
    Columns3,
    Pyramid,
} from 'lucide-react'
import { BackButton } from '../Components/BackButtonComponent'
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
                <PurpleSection>
                    <PurpleTitle>
                        Jerarquía de datos
                        <Pyramid />
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

                <Space />

                <Title>
                    Bases de datos relacionales:
                </Title>
                <Paragraph>
                    Es un conjunto de datos relacionados entre si, que pertenecen a un mismo contexto. las bases de datos relacionales poseen: 
                </Paragraph>
                <Space />
                <BlueSection>
                    <BlueTitle>
                        Tablas, campos y registros:
                        <Table />
                        <Columns3 />
                        <Rows3 />
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

                <div className='flex gap-16'>
                    <PurpleSection>
                        <PurpleTitle>
                            Están compuetos por:
                        </PurpleTitle>
                        <Element>
                            <PurpleWordSection>● Entidades</PurpleWordSection>: objeto tanguible que tiene carácteristicas.
                        </Element>
                        <Element>
                            <PurpleWordSection>● Atributos</PurpleWordSection>: son las caracteristicas que posee la entidad.
                        </Element>
                        <Element>
                            <PurpleWordSection>● Relación</PurpleWordSection>: es la manera en la que las entidades se relacionan.
                        </Element>
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Cardinalidad:
                        </GreenTitle>
                        <Paragraph>
                            Es cuantas instancias tienen entre si 2 entidades relacionadas. Hay 3 tipos:
                        </Paragraph>
                        <Element>
                            <GreenWordSection>● Uno a uno (1 - 1)</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Uno a muchos (1 - N)</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Muchos a muchos (N - M)</GreenWordSection>
                        </Element>
                    </GreenSection>
                </div>
                <Space />

                <Title>
                    Figuras del diagrama entidad-relación
                </Title>

                <Space />

                <Title>
                    Ejemplo:
                </Title>

                <Space />

                <Title>
                    Dependencias
                </Title>
                <Paragraph>
                    Es la manera en que un conjunto de campos en una tabla se relacionan entre sí.
                </Paragraph>

                <Space />

                <BlueSection>
                    <BlueTitle>
                        Tipos de Dependencias:
                    </BlueTitle>
                    <Element>
                        <BlueWordSection>● Dependencia funcional</BlueWordSection>: los valores de los campos de un registro dependen de la llave primaria
                    </Element>
                    <Element>
                        <BlueWordSection>● Dependencia parcial</BlueWordSection>: los valores de los campos de un registro dependen parcialmente de la llave primaria
                    </Element>
                    <Element>
                        <BlueWordSection>● Dependencia transitiva</BlueWordSection>: el valor de un campo, depende de otro valor de un campo el cual no es una llave
                    </Element>
                </BlueSection>

                <Space />

                <Title>
                    Normalización
                </Title>
                <Paragraph>
                    Es un conjunto estándarizado de reglas que se aplican en una base de datos relacional para evitar futuros problemas. Intenta evitar el exceso de atributos, por ejemplo.
                </Paragraph>

                <Space />

                <Title>
                    Formas normales
                </Title>

            </div>
            <BackButton />
        </>
    )
}

export { DataBase }
