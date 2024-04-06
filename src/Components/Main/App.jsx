import React from 'react'
import { MainTitle } from '../MainTitle/MainTitle';
import { CardComponent } from '../CardComponent/CardComponent';;
import { SearchBar } from '../SearchBar/SearchBar';
import { MagicMotion } from "react-magic-motion";
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

    {
      title: 'Estructuras de datos',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos'
    },

    {
      title: 'Algo asi',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos'
    },

    {
      title: 'Pruebas',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos'
    },

  ];

  const [topic, setTopic] = React.useState(arrayTopics);

  const [search, setSearch] = React.useState('');

  const searchTopic = topic.filter(topicFilter =>
  (topicFilter.title.toLowerCase().includes(search.toLowerCase()) ||
    topicFilter.description.toLowerCase().includes(search.toLocaleLowerCase())
  ))


  return (
    <>
      <MainTitle />
      <SearchBar search={search} setSearch={setSearch} />
      {searchTopic.map(renderTopic => (<CardComponent
        key={renderTopic.title}
        title={renderTopic.title}
        description={renderTopic.description}
        route={renderTopic.route}
      />))}
    </>


  )
}

export default App
