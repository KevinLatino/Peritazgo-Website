import React from 'react';
import { Title } from '../../../TitleText/Title';
import { BlueSection } from '../../../SectionText/Section';

const Algorithm = () => {

  return (
    <>
      <Title>
        Los algoritmos
      </Title>

      <p>Un algoritmo es una secuencia de acciones lógicas necesarias para realizar una tarea en específico.</p>
      <p>Caracteristicas de los algotimos:</p>

      <BlueSection>
        <p>● Finito: tiene un inicio y un fin.</p>
        <p>● Preciso: sus acciones son lógicas, por ende, no tienen ambigüedad</p>
        <p>● Definido: siempre produce el mismo resultado</p>
      </BlueSection>
    </>
  );
}

export { Algorithm };
