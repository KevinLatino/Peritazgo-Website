import React from 'react';
import { Title, Paragraph, Element, Space, BlueTitle, PurpleTitle } from '../../../PageTexts/PageText';
import { BlueSection, BlueWordSection, PurpleSection, PurpleWordSection } from '../../../Sections/Section';

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
          <Element>
            <BlueWordSection>● Finito</BlueWordSection>: tiene un inicio y un fin.
          </Element>

          <Element>
            <BlueWordSection>● Preciso</BlueWordSection>: sus acciones son lógicas, por ende, no tienen ambigüedad.
          </Element>

          <Element>
            <BlueWordSection>● Definido</BlueWordSection>: siempre produce el mismo resultado.
          </Element>

        </BlueSection>

        <PurpleSection>

          <PurpleTitle>Ejemplo a modificar después:</PurpleTitle>
          <Element>
            <PurpleWordSection>● Finito</PurpleWordSection>: tiene un inicio y un fin.
          </Element>
          <Element>
            <PurpleWordSection>● Preciso</PurpleWordSection>: sus acciones son lógicas, por ende, no tienen ambigüedad.
          </Element>
          <Element>
            <PurpleWordSection>● Definido</PurpleWordSection>: siempre produce el mismo resultado.
          </Element>

        </PurpleSection>

      </div>

      <Space />
    </>
  );
}

export { Algorithm };
