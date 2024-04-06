import React, { useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import './Styles/Algorithm.css';

const Algorithm = () => {

  return (
    <>
      <h1 className='All-title'>Los algoritmos</h1>
      <p>Un algoritmo es una secuencia de acciones lógicas necesarias para realizar una tarea en específico.</p>
      <p>Caracteristicas de los algotimos:</p>

      <section id='example'>
        <p>● Finito: Tiene un inicio y un fin.</p>
        <p>● Preciso: Sus acciones son lógicas, por ende, no tienen ambigüedad</p>
        <p>● Definido: Siempre produce el mismo resultado</p>
      </section>
    </>
  );
}

export { Algorithm };
