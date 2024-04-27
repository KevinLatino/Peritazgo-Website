import React from 'react'
import { MainTitle } from '../src/Components/MainTitle/MainTitle';
import { CardComponent } from '../src/Components/CardComponent/CardComponent';
import { SearchBar } from '../src/Components/SearchBar/SearchBar';
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
} from 'lucide-react';
import 'animate.css';
import './index.css'


const App = () => {

  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, punteros, diagramas de flujo.',
      route: '/Aprendiendo',
      icons: [
        <Blocks size={21} className='icon-card' />,
        <Puzzle size={21} className='icon-card' />,
        <BookText size={21} className='icon-card' />,
      ],
    },

    {
      title: 'Expresiones',
      description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
      route: '/Expresiones',
      icons: [
        <Ampersands size={21} className='icon-card' />,
        <Divide size={21} className='icon-card' />,
        <BrainCircuit size={21} className='icon-card' />
      ],
    },

    {
      title: 'Estructuras de control',
      description: 'Componentes de la programación que permiten controlar el flujo de ejecución de un programa',
      route: '/Estructuras-de-control',
      icons: [
        <Split size={21} className='icon-card' />,
        <Workflow size={21} className='icon-card' />,
        <RefreshCcw size={21} className='icon-card' />
      ],
    },

    {
      title: 'Estructuras de datos',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos',
      icons: [
        <FileText size={21} className='icon-card' />,
        <Route size={21} className='icon-card' />,
        <Binary size={21} className='icon-card' />
      ],
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

  const searchTopic = topic.filter(topic =>
    (topic.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
    (topic.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  )


  return (
    <>
      <div className='flex justify-normal items-center flex-col animate__animated animate__fadeInDown'>
        <MainTitle />
        <SearchBar search={search} setSearch={setSearch} />
        <div className='flex flex-wrap items-center justify-center gap-x-36 gap-y-16 p-8'>
          {searchTopic.map(renderTopic => (<CardComponent
            key={renderTopic.title}
            route={renderTopic.route}
            title={renderTopic.title}
            description={renderTopic.description}
            icons={renderTopic.icons}
          />))}
        </div>
      </div>
    </>


  )
}

export default App
