import React from 'react'
import {Variable} from './Learn-the-basics/VariableScreen'
import {Algorithm} from './Learn-the-basics/AlgorithmScreen'
import { Pseudocodigo } from './Learn-the-basics/PseudocodigoScreen'
import {FlowChart} from './Learn-the-basics/FlowChart'


const BasicKnowledge = () => {
  return (
    <>
      <Variable />
      <Algorithm />
      <Pseudocodigo />
      <FlowChart />
    </>
  )
}

export {BasicKnowledge}
