import React from 'react';
import { Title, Paragraph } from '../../../PageTexts/PageText';
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
      <Paragraph>
        Caracteristicas de los algotimos:
      </Paragraph>

      <BlueSection>
        <p>● Finito: tiene un inicio y un fin.</p>
        <p>● Preciso: sus acciones son lógicas, por ende, no tienen ambigüedad</p>
        <p>● Definido: siempre produce el mismo resultado</p>
      </BlueSection>
    </>
  );
}

export { Algorithm };
