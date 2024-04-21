import React from 'react'
import FlowCharts from '../../../../Images/FlowChart.png'
import { useState } from 'react'
import { MagicMotion } from 'react-magic-motion'
import { ChevronDown } from 'lucide-react'
import './Styles/FlowChart.css'

const FlowChart = () => {

  const [open, setOpen] = useState(false);

  const handleClosed = () => [
    setOpen(!open)
  ]

  return (
    <>
      <MagicMotion
        transition={{stiffness: 180, damping: 20, mass: 1.1 }}
      >
        <h1 className='All-title'>Diagramas de flujo</h1>
        <p>
          Un diagrama de flujo es una representación gráfica de un pseudocódigo.
          Los diagramas de flujo están compuestos por un conjunto estandarizado de figuras.
        </p>
        <div
          className='figures-container'
        >
          <button
            className='styles-button'
            onClick={handleClosed}
          >
            Has click para ver más
            <ChevronDown size={32} className='chevron-styles' />
          </button>
          {open && (
            <img src={FlowCharts} width={500} />
          )}
        </div>
      </MagicMotion>
    </>
  )
}

export { FlowChart }
