import React from 'react'
import { MainTitle } from  '../MainTitle/MainTitle';
import { CardComponent } from '../CardComponent/CardComponent';;
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css'




function App() {
  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, diagramas de flujo.',
      route: '/Aprendiendo'
    },

    {
      title: 'Expresiones',
      description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
      route: '/Expresiones'
    },

    {
      title: 'Estructuras de control',
      description: 'Es un conjunto de normas que dan flujo a nuestro código.',
      route: '/Estructuras-de-control'
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
      <SearchBar search={search} setSearch={setSearch} />
      {searchTopics.map(topic => (<CardComponent key={topic.title} title={topic.title} description={topic.description} route={topic.route}/>))}
    </>


  )
}

export default App
