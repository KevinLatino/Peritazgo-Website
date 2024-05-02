import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import {
  Title,
  Paragraph,
  Space,
  Element,
  GreenTitle,
  BlueTitle
} from '../../../PageTexts/PageText';

import {
  BlueSection,
  GreenSection,
  BlueWordSection,
  GreenWordSection,
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

      <br />


      <div className='flex gap-16'>

      <BlueSection>
        <BlueTitle>Ejemplos de como asignar un valor:</BlueTitle>
        <Element>
          number <BlueWordSection>←</BlueWordSection> 0
        </Element>
        <Element>
          number <BlueWordSection>=</BlueWordSection> 0
        </Element>

        <Element>
          <BlueTitle>Y para asignar caracteres a una variable tenemos este ejemplo:</BlueTitle>
        </Element>

        <Element>
          name <BlueWordSection>←</BlueWordSection> "Juan"
        </Element>
        <Element>
          name <BlueWordSection>=</BlueWordSection> "Juan"
        </Element> 
      </BlueSection>


        <GreenSection>

          <GreenTitle>
            Buenas prácticas al utilizar variables <CircleCheckBig />
          </GreenTitle>

          <Space />

          <Element>
            <GreenWordSection>● Nombres descriptivos</GreenWordSection>: que describa a la variable.
          </Element>

          <Element>
            <GreenWordSection>● Utilizar camelCase</GreenWordSection>: ayuda a la consistencia del código.
          </Element>

          <Element>
            <GreenWordSection>● Usar nombres en inglés</GreenWordSection>: ya que es el idioma universal.
          </Element>

          <Element>
            <GreenWordSection>● Evitar nombres largos</GreenWordSection>: Buscar que cortos y compactos.
          </Element>

        </GreenSection>
      </div>
      <Space />
    </>
  );
};

export { Variable };

