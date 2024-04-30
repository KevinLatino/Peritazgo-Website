import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import { Ban } from 'lucide-react';
import {
  Title,
  Paragraph,
  Space,
  Element,
  GreenTitle,
  RedTitle,
  BlueTitle
} from '../../../PageTexts/PageText';

import {
  BlueSection,
  GreenSection,
  RedSection
} from '../../../Sections/Section';


const Variable = () => {
  return (
    <>

      <Title>
        Las variables
      </Title>

      <Paragraph>
        Una variable es un espacio reservado en memoria que tiene una dirección, un tipo, un nombre y un valor.
      </Paragraph>

      <Space />

      <BlueSection>
        <BlueTitle>Ejemplos de como asignar un valor:</BlueTitle>
        <Element>num ← 0</Element>
        <Element>num = 0</Element>
      </BlueSection>

      <br />


      <div className='flex gap-16'>

        <GreenSection>

          <GreenTitle >Buenas prácticas al utilizar variables <CircleCheckBig color='#44AC99' /></GreenTitle>
          <Space />
          <Element>● Nombres descriptivos: que reflejen el propósito de la variable.</Element>
          <Element>● Utilizar camelCase:  para mantener la consistencia en el código.</Element>
          <Element>● Usar nombres en inglés: debido a que es el idioma universal.</Element>
          <Element>● Evitar nombres demasiado largos: lo mejor es que sean cortos y compactos.</Element>
          
        </GreenSection>

        <RedSection>
          <RedTitle>Malas prácticas al utilizar variables <Ban /></RedTitle>
          <Element>● Nombres descriptivos: que reflejen el propósito de la variable.</Element>
          <Element>● Utilizar camelCase:  para mantener la consistencia en el código.</Element>
          <Element>● Usar nombres en inglés: debido a que es el idioma universal.</Element>
          <Element>● Evitar nombres demasiado largos: lo mejor es que sean cortos y compactos.</Element>
        </RedSection>
      </div>
      <Space />
    </>
  );
};

export { Variable };

