import React from 'react'
import {Variable} from './Learn-the-basics/Variable'
import {Algorithm} from './Learn-the-basics/Algorithm'
import { Pseudocodigo } from './Learn-the-basics/Pseudocodigo'
import {FlowChart} from './Learn-the-basics/FlowChart'


const BasicKnowledgeScreen = () => {
  return (
    <>
      <Variable />
      <Algorithm />
      <Pseudocodigo />
      <FlowChart />
    </>
  )
}

export {BasicKnowledgeScreen}
