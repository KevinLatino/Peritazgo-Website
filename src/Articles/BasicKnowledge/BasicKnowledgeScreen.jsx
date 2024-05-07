import React from 'react'
import { Variable } from './Learn-the-basics/Variable'
import { Algorithm } from './Learn-the-basics/Algorithm'
import { Pseudocodigo } from './Learn-the-basics/Pseudocodigo'
import { FlowChart } from './Learn-the-basics/FlowChart'
import { Pointers } from './Learn-the-basics/Pointers'
import { Subprocesses } from './Learn-the-basics/Subprocesses'
import { BackButton } from '../../Components/BackButtonComponent'
import { Space } from '../../Components/PageTextsComponent'
import "animate.css";


const BasicKnowledgeScreen = () => {
  return (
    <>

      <div className="animate__animated animate__fadeInLeft">

        <Variable />
        <Algorithm />
        <div className='flex gap-16'>
          <FlowChart />
          <Pseudocodigo />
        </div>
        <Space />
        <Subprocesses />
        <Pointers />
      </div>
      <BackButton />
    </>
  )
}

export { BasicKnowledgeScreen }
