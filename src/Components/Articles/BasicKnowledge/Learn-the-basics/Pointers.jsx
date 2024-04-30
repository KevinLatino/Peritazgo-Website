import React from 'react'
import { NotebookText } from 'lucide-react'
import { Title, Paragraph, Space, GreenTitle, Element } from '../../../PageTexts/PageText';
import {  GreenSection } from '../../../Sections/Section'

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

            <Space />


            <Title >
                Variables Puntero
            </Title>
            <Paragraph>
                Una variable puntero a un tipo arbitrario T es una variable que almacena como valor la dirección en memoria
                de una variabla del mismo tipo T. Es decir, el tipo de la variable y el tipo al que la
                variable puntero apunta coinciden. Cabe destacar que las variables puntero siguen siendo variables ordinarias,
                por ende, tienen su propia dirección en memoria.
            </Paragraph>

            <Space />

            <Title>
                Aritmética de Punteros
            </Title>
            <Paragraph>
                La aritmética de punteros es el conjunto de operaciones propias de los punteros y las variables puntero.
            </Paragraph>

            <Space />
            
            <GreenSection>
                <GreenTitle> Nota importante <NotebookText /></GreenTitle>
                <Element>● &x: La dirección en memoria de la variable x.</Element>
                <Element>● *p: El valor de la variable a la que apunta la variable puntero p.</Element>
                <Element>● *p = y: Se almacena el valor y en la dirección en memoria que almacena la variable puntero p.</Element>
            </GreenSection>

            <Space />
        </>
    )
}

export { Pointers }
