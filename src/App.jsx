import React from 'react'
import { MainTitle } from './Components/MainTitle';
import { CardComponent } from './Components/CardComponent';
import { SearchBar } from './Components/SearchBar';
import { BasicKnowledge } from './Components/BasicKnowledge';
import './App.css'


function App() {
  const arrayTopics = [
    {
      title:'Variables', 
      description: 'Es un espacio reservado en memoria que tiene una dirección, un tipo, un nombre y un valor.'
    },

    {
      title: 'Algoritmos',
      description: 'Un algoritmo es una secuencia de acciones lógicas necesarias para realizar una tarea.'
    },

    {title:'Pseudocodigo', 
    description: 'El pseudocódigo describe un algoritmo utilizando un lenguaje cercano al lenguaje humano.'
    },

    {title:'Diagramas de flujo', 
    description: 'Un diagrama de flujo es una representación gráfica de un pseudocódigo.'
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
