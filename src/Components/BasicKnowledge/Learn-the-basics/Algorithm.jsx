import React, { useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import './Styles/Algorithm.css'; 

const Algorithm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className='All-title'>Los algoritmos</h1>
      <p>Un algoritmo es una secuencia de acciones lógicas necesarias para realizar una tarea en específico.</p>
      <p>Caracteristicas de los algotimos:</p>

      <MagicMotion transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
        <section>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="accordion-button"
          >
            Has click para ver los ejemplos
          </button>
          {isOpen && (
            <div className="accordion-content">
              <p>● Finito: Tiene un inicio y un fin.</p>
              <p>● Preciso: Sus acciones son lógicas, por ende, no tienen ambigüedad</p>
              <p>● Definido: Siempre produce el mismo resultado</p>
            </div>
          )}
        </section>
      </MagicMotion>
    </>
  );
}

export { Algorithm };
