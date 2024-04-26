import React from 'react'
import { NotebookText } from 'lucide-react'
import { Title, Paragraph } from '../../../PageTexts/PageText';
import {  GreenSection } from '../../../SectionText/Section'
import '../Learn-the-basics/Styles/Pointers.css'

const Pointers = () => {
    return (
        <>
            <Title >
                Punteros
            </Title>
            <Paragraph>
                Un puntero es una dirección en memoria. Esta dirección en memoria puede ser la dirección en memoria de una variable, entonces se dice
                que el puntero apunta a la variable. También, esta dirección en memoria puede ser nula,
                entonces se dice que el puntero no apunta a nada.
            </Paragraph>

            <Title >
                Variables Puntero
            </Title>
            <Paragraph>
                Una variable puntero a un tipo arbitrario T es una variable que almacena como valor la dirección en memoria
                de una variabla del mismo tipo T. Es decir, el tipo de la variable y el tipo al que la
                variable puntero apunta coinciden. Cabe destacar que las variables puntero siguen siendo variables ordinarias,
                por ende, tienen su propia dirección en memoria.
            </Paragraph>

            <Title>
                Aritmética de Punteros
            </Title>
            <Paragraph>
                La aritmética de punteros es el conjunto de operaciones propias de los punteros y las variables puntero.
            </Paragraph>
            <GreenSection>
                <h2 className='note'>Nota importante <NotebookText className='icon' /></h2>
                <p>● &x: La dirección en memoria de la variable x</p>
                <p>● *p: El valor de la variable a la que apunta la variable puntero p</p>
                <p>● *p = y: Se almacena el valor y en la dirección en memoria que almacena la variable puntero p</p>
            </GreenSection>
        </>
    )
}

export { Pointers }
