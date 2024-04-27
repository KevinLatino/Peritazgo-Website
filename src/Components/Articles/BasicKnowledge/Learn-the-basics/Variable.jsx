import React from 'react';
import { MoveLeft, Equal, CircleCheckBig } from 'lucide-react';
import { Ban } from 'lucide-react';
import { Title, Paragraph } from '../../../PageTexts/PageText';
import {
  BlueSection,
  GreenSection,
  RedSection
} from '../../../SectionText/Section';
import './Styles/Variable.css';


const Variable = () => {
  return (
    <>

      <Title>
        Las variables
      </Title>

      <Paragraph>
        Una variable es un espacio reservado en memoria que tiene una dirección, un tipo, un nombre y un valor.
      </Paragraph>

      <Paragraph>
        A una variable se le puede asignar un valor mediante el operador de asignación. El operador de asignación se puede representar con el símbolo <MoveLeft className='icon-styles' /> o bien con el símbolo <Equal className='icon-styles' />, de la siguiente manera.
      </Paragraph>

      <BlueSection>
        <p>Ejemplos de como asignar un valor:</p>
        <p>num ← 0</p>
        <p>num = 0</p>
      </BlueSection>

      <br />

      <GreenSection>
        <h3 id='allowed-h3'>Buenas prácticas al utilizar variables <CircleCheckBig id='icon-check' /></h3>
        <p>● Nombres descriptivos: que reflejen el propósito de la variable.</p>
        <p>● Utilizar camelCase:  para mantener la consistencia en el código</p>
        <p>● Usar nombres en inglés: debido a que es el idioma universal</p>
        <p>● Evitar nombres demasiado largos: lo mejor es que sean cortos y compactos</p>
      </GreenSection>

      <br />

      <RedSection>
        <h3 id='not-allowed-h3'>Malas prácticas al utilizar variables <Ban id='ban-icon' /></h3>
        <p>● Nombres descriptivos: que reflejen el propósito de la variable.</p>
        <p>● Utilizar camelCase:  para mantener la consistencia en el código</p>
        <p>● Usar nombres en inglés: debido a que es el idioma universal</p>
        <p>● Evitar nombres demasiado largos: lo mejor es que sean cortos y compactos</p>
      </RedSection>
    </>
  );
};

export { Variable };

