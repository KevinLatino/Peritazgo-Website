import React from 'react'
import { Variable } from './Learn-the-basics/Variable'
import { Algorithm } from './Learn-the-basics/Algorithm'
import { Pseudocodigo } from './Learn-the-basics/Pseudocodigo'
import { FlowChart } from './Learn-the-basics/FlowChart'
import { BackButton } from '../../BackButton/BackButton'
import { Pointers } from './Learn-the-basics/Pointers'
import "animate.css";


const BasicKnowledgeScreen = () => {
  return (
    <>

      <div className="animate__animated animate__fadeInLeft">

        <Variable />
        <Algorithm />
        <Pointers />
        <Pseudocodigo />
        <FlowChart />
      </div>
      <BackButton />
    </>
  )
}

export { BasicKnowledgeScreen }
