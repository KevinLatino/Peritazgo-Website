import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { Title } from '../../../TitleText/Title'
import { Accordion } from '../../../AccordionComponent/Accordion'
import './Styles/FlowChart.css'

const FlowChart = () => {

  return (
    <>

      <Title>
        Diagramas de flujo
      </Title>
      <p>
        Un diagrama de flujo es una representación gráfica de un pseudocódigo.
        Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
      </p>

      <Accordion title='Has click para ver más'>
        <img src={FlowCharts} width={480} />
      </Accordion>
    </>
  )
}

export { FlowChart }
