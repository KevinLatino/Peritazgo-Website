import React from 'react'
import FlowCharts from '.././../../../public/FlowChart.svg'
import {
  Paragraph,
  Space,
  BlueTitle
} from '../../../Components/PageTextsComponent';
import { BlueSection } from '../../../Components/SectionsComponent';

const FlowChart = () => {

  return (
    <div>

      <BlueSection>
        <BlueTitle>
          Diagramas de flujo
        </BlueTitle>

        <Paragraph>
          Son representaciones gráficas de secuencias de pasos a realizar. Estas figuras gráficas son estándares regulados por la (ANSI).
        </Paragraph>

        <Space />

        <div className='flex justify-center items-center'>
          <img src={FlowCharts} width={350} className='pointer-events-none'/>
        </div>

      </BlueSection>

      
    </div>
  )
}

export { FlowChart }
