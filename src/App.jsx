import React from 'react'
import { MainTitle } from './Components/MainTitle';
import { CardComponent } from './Components/CardComponent';
import { SearchBar } from './Components/SearchBar';
import { BasicKnowledge } from './Components/BasicKnowledge';
import './App.css'


function App() {
  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocófigo, diagramas de flujo.'
    },

    {title:'Expresiones lógicas', 
    description: 'Combinación válida de operadores, variables, constantes y funciones que producen un valor.'
    },

    {title:'Estructuras de control', 
    description: 'Es un conjunto de normas que dan flujo a nuestro código.'
    },

    {title:'Estructura de datos', 
    description: 'Son las que organizan nuestro proyecto en ejecución.'
    }

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
    <BasicKnowledge />
    </>


  )
}

export default App
