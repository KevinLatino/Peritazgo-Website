import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { Title, Paragraph, Space } from '../../../PageTexts/PageText';
import { Accordion } from '../../../AccordionComponent/Accordion'

const FlowChart = () => {

  return (
    <>

      <Title>
        Diagramas de flujo
      </Title>

      <Space />
      
      <Paragraph>
        Un diagrama de flujo es una representación gráfica de un pseudocódigo.
        Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
      </Paragraph>

      <Space />

      <Accordion title='Has click para ver más'>
        <img src={FlowCharts} width={480} />
      </Accordion>
    </>
  )
}

export { FlowChart }
