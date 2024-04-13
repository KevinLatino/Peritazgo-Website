import React from 'react'
import { MainTitle } from '../MainTitle/MainTitle';
import { CardComponent } from '../CardComponent/CardComponent';
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from 'react';
import {
  BookText,
  Blocks,
  Puzzle,
  Split,
  BrainCircuit,
  Ampersands,
  Divide,
  Route,
  Workflow,
  Binary,
  RefreshCcw,
  FileText,
  Database,
  Server
} from 'lucide-react';
import 'animate.css';
import './App.css'


function App() {
  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, diagramas de flujo.',
      route: '/Aprendiendo',
      icon: <Blocks size={21} className='icon-card' />,
      icon2: <Puzzle size={21} className='icon-card' />,
      icon3: <BookText size={21} className='icon-card' />,

    },

    {
      title: 'Expresiones',
      description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
      route: '/Expresiones',
      icon: <Ampersands size={21} className='icon-card' />,
      icon2: <Divide size={21} className='icon-card' />,
      icon3: <BrainCircuit size={21} className='icon-card' />
    },

    {
      title: 'Estructuras de control',
      description: 'Componentes de la programación que permiten controlar el flujo de ejecución de un programa',
      route: '/Estructuras-de-control',
      icon: <Split size={21} className='icon-card' />,
      icon2: <Workflow size={21} className='icon-card' />,
      icon3: <RefreshCcw size={21} className='icon-card' />
    },

    {
      title: 'Estructuras de datos',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos',
      icon: <FileText size={21} className='icon-card' />,
      icon2: <Route size={21} className='icon-card' />,
      icon3: <Binary size={21} className='icon-card' />
    },

    {
      title: 'Algo asi',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos',
    },

    {
      title: 'Pruebas',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos',
    },

  ];

  const [topic, setTopic] = useState(arrayTopics);

  const [search, setSearch] = useState('');

  const searchTopic = topic.filter(topicFilter =>
  (topicFilter.title.toLowerCase().includes(search.toLowerCase()) ||
    topicFilter.description.toLowerCase().includes(search.toLocaleLowerCase())
  ))


  return (
    <>
      <div className='container animate__animated animate__fadeInDown'>
        <MainTitle />
        <SearchBar search={search} setSearch={setSearch} />
        <div className='cards-container'>
          {searchTopic.map(renderTopic => (<CardComponent
            key={renderTopic.title}
            title={renderTopic.title}
            description={renderTopic.description}
            icon={renderTopic.icon}
            icon2={renderTopic.icon2}
            icon3={renderTopic.icon3}
            route={renderTopic.route}
          />))}
        </div>
      </div>
    </>


  )
}

export default App
