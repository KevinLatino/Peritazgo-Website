import React from 'react';
import {
  Title,
  Paragraph,
  Element,
  Space,
  BlueTitle,
  PurpleTitle
} from '../../../Components/PageTextsComponent';
import {
  BlueSection,
  BlueWordSection,
  PurpleSection,
  PurpleWordSection
} from '../../../Components/SectionsComponent';

const Algorithm = () => {

  return (
    <>
      <Title>
        Los algoritmos
      </Title>

      <Paragraph>
        Es un método para resolver un problema mediante una secuencia de pasos
        bien definidos, ordenados y finitos.
      </Paragraph>

      <Space />

      <div className='flex justify-center items-center gap-16'>
        <BlueSection>

          <BlueTitle>Caracteristicas de los algotimos:</BlueTitle>
          <Element>
            <BlueWordSection>● Finito</BlueWordSection>: tiene un inicio y un fin.
          </Element>

          <Element>
            <BlueWordSection>● Preciso</BlueWordSection>: sus acciones son lógicas, por ende,  carece de ambigüedad.
          </Element>

          <Element>
            <BlueWordSection>● Definido</BlueWordSection>: siempre produce el mismo resultado.
          </Element>

        </BlueSection>

        <PurpleSection>

          <PurpleTitle>En un algoritmo se distinguen las siguientes acciones:
          </PurpleTitle>
          <Element>
            <PurpleWordSection>● Entrada</PurpleWordSection>: es la información de partida que necesita el algoritmo.
          </Element>
          <Element>
            <PurpleWordSection>● Proceso</PurpleWordSection>: es el conjunto de todas las operaciones a realizar.
          </Element>
          <Element>
            <PurpleWordSection>● Salida</PurpleWordSection>: son los resultados obtenidos.
          </Element>

        </PurpleSection>

      </div>

      <Space />

      <Title>
        Representación de los algoritmos
      </Title>

      <Paragraph>
        Las dos herramientas más utilizadas comúnmente para describir algoritmos son:
      </Paragraph>

      <Space />
    </>
  );
}

export { Algorithm };
