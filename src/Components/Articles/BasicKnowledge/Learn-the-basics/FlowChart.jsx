import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { useState } from 'react'
import { MagicMotion } from 'react-magic-motion'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import './Styles/FlowChart.css'

const FlowChart = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className='All-title'>Diagramas de flujo</h1>
      <p>
        Un diagrama de flujo es una representación gráfica de un pseudocódigo.
        Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
      </p>
      <br />
      <MagicMotion
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='figures-container'
        >
          <button
            className='styles-button'
            onClick={() => setOpen(!open)}
          >
            Has click para ver las figuras
            <ChevronDown className='chevron-styles' size={32} />
          </button>
          {open && (
            <img src={FlowCharts} width={500} />
          )}
        </motion.div>
      </MagicMotion>
    </>
  )
}

export { FlowChart }
