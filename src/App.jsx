import React from 'react'
import { MainTitle } from './Components/MainTitle';
import { CardComponent } from './Components/CardComponent';
import { SearchBar } from './Components/SearchBar';
import { BasicKnowledgeScreen } from './Components/BasicKnowledgeScreen';
import {ExpressionScreen} from './Components/ExpressionScreen';
import './App.css'
import { Import } from 'lucide-react';


function App() {
  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocófigo, diagramas de flujo.'
    },

    {title:'Expresiones', 
    description: 'Se abordan temas como valores, distintos tipos de operadores y disntintos tipos de expresiones.'
    },

    {title:'Estructuras de control', 
    description: 'Es un conjunto de normas que dan flujo a nuestro código.'
    },

    {title:'Estructura de datos', 
    description: 'Son las que organizan nuestro proyecto en ejecución.'
    },

  ]

  const [search, setSearch] = React.useState('');

  const [topic, setTopic] = React.useState(arrayTopics)

  const searchTopics = topic.filter(topic =>
    (topic.title.toLowerCase().includes(search.toLowerCase()) ||
    topic.description.toLowerCase().includes(search.toLowerCase())
    ))


  return (
    <>
    <MainTitle />
    <SearchBar search={search} setSearch={setSearch}/>
    {searchTopics.map(topic => (<CardComponent key={topic.title} title={topic.title} description={topic.description}/>))} 
    <BasicKnowledgeScreen/>
    <ExpressionScreen />
    </>


  )
}

export default App
