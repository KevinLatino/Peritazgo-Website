import React from 'react'
import { Variable } from './Learn-the-basics/Variable'
import { Algorithm } from './Learn-the-basics/Algorithm'
import { Pseudocodigo } from './Learn-the-basics/Pseudocodigo'
import { FlowChart } from './Learn-the-basics/FlowChart'
import { ProcessBar } from '../Process-Bar/ProcessBar'
import { BackButton } from '../BackButton/BackButton'
import "animate.css";


const BasicKnowledgeScreen = () => {
  return (
    <>
      <ProcessBar />
      <div className="animate__animated animate__fadeInLeft">
        <Variable />
        <Algorithm />
        <Pseudocodigo />
        <FlowChart />
      </div>
      <BackButton />
    </>
  )
}

export { BasicKnowledgeScreen }
