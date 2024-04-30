import React from 'react';
import { Title, Paragraph, Element, Space, BlueTitle } from '../../../PageTexts/PageText';
import { BlueSection } from '../../../Sections/Section';

const Algorithm = () => {

  return (
    <>
      <Title>
        Los algoritmos
      </Title>

      <Paragraph>
        Un algoritmo es una secuencia de acciones lógicas necesarias para realizar una tarea en específico.
      </Paragraph>

      <Space />

      <div className='flex justify-between'>
      <BlueSection>
        <BlueTitle>Caracteristicas de los algotimos:</BlueTitle>
        <Element>● Finito: tiene un inicio y un fin.</Element>
        <Element>● Preciso: sus acciones son lógicas, por ende, no tienen ambigüedad.</Element>
        <Element>● Definido: siempre produce el mismo resultado.</Element>
      </BlueSection>

      <BlueSection>
        <BlueTitle>Ejemplo a modificar después</BlueTitle>
        <Element>● Finito: tiene un inicio y un fin.</Element>
        <Element>● Preciso: sus acciones son lógicas, por ende, no tienen ambigüedad.</Element>
        <Element>● Definido: siempre produce el mismo resultado.</Element>
      </BlueSection>
      </div>

      <Space />
    </>
  );
}

export { Algorithm };
