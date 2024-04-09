import React from 'react'
import './Styles/FlowChart.css'
import FlowCharts from '../../../Images/FlowChart.png'
import {motion} from 'framer-motion'

const FlowChart = () => {
  return (
    <>
      <h1 className='All-title'>Diagramas de flujo</h1>
      <p>
        Un diagrama de flujo es una representación gráfica de un pseudocódigo.
        Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
      </p>
      <br />
      <motion.img 
      onTap={{scale:1.1}}
      src={FlowCharts} width={500}/>
    </>
  )
}

export { FlowChart }
