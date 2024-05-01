import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { Paragraph, Space, BlueTitle } from '../../../PageTexts/PageText';
import { BlueSection } from '../../../Sections/Section';

const FlowChart = () => {

  return (
    <>

      <BlueSection>
        <BlueTitle>
          Diagramas de flujo
        </BlueTitle>

        <Paragraph>
        Son representaciones gráficas de secuencias de pasos a realizar. Estas figuras son estándares globales por la (ANSI - American National Standars Institute)
        </Paragraph>

        <Space />

        <img src={FlowCharts} width={300} />

      </BlueSection>
    </>
  )
}

export { FlowChart }
