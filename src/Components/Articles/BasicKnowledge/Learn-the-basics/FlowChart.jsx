import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { Title, Paragraph } from '../../../PageTexts/PageText';
import { Accordion } from '../../../AccordionComponent/Accordion'

const FlowChart = () => {

  return (
    <>

      <Title>
        Diagramas de flujo
      </Title>
      <Paragraph>
        Un diagrama de flujo es una representación gráfica de un pseudocódigo.
        Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
      </Paragraph>

      <Accordion title='Has click para ver más'>
        <img src={FlowCharts} width={480} />
      </Accordion>
    </>
  )
}

export { FlowChart }
