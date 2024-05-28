import React from 'react'
import { MainTitle } from '../src/Components/MainTitleComponent';
import { CardComponent } from '../src/Components/CardComponent';
import { SearchBar } from '../src/Components/SearchBarComponent';
import { useState } from 'react';
import { nfd } from 'unorm'; 
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
  Brain,
  Server,
  Link,
  NotepadText,
  FileType
} from 'lucide-react';
import 'animate.css';
import './index.css'


const App = () => {

  const arrayTopics = [

    {
      id: 1,
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, punteros, diagramas de flujo.',
      route: '/Aprendiendo',
      icons: [
        <Blocks size={27} className='text-[#5cafad] p-0.5 m-1 ' />,
        <Puzzle size={27} className='text-[#5cafad] p-0.5 m-1' />,
        <BookText size={27} className='text-[#5cafad] p-0.5 m-1' />,
      ],
    },

    {
      id: 2,
      title: 'Expresiones',
      description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
      route: '/Expresiones',
      icons: [
        <Ampersands size={27} className='text-icon_color p-0.5 m-1' />,
        <Divide size={27} className='text-icon_color p-0.5 m-1' />,
        <BrainCircuit size={27} className='text-icon_color p-0.5 m-1' />
      ],
    },

    {
      id: 3,
      title: 'Estructuras de control',
      description: ' Son componentes de la programación que permiten controlar el flujo de ejecución de un programa.',
      route: '/Estructuras-de-control',
      icons: [
        <Split size={27} className='text-icon_color p-0.5 m-1' />,
        <Workflow size={27} className='text-icon_color p-0.5 m-1' />,
        <RefreshCcw size={27} className='text-icon_color p-0.5 m-1' />
      ],
    },

    {
      id: 4,
      title: 'Estructuras de datos',
      description: 'Son las que organizan nuestro proyecto en ejecución, se abordan sus distintas clasificaciones.',
      route: '/Estructuras-de-datos',
      icons: [
        <FileText size={27} className='text-icon_color p-0.5 m-1' />,
        <Route size={27} className='text-icon_color p-0.5 m-1' />,
        <Binary size={27} className='text-icon_color p-0.5 m-1' />
      ],
    },

    {
      id: 5,
      title: 'Bases de datos',
      description: 'Se refiere a un conjunto de datos relacionados entre sí que pertenecen a un mismo contexto.',
      route: '/Bases-de-datos',
      icons: [
        <Database size={27} className='text-icon_color p-0.5 m-1' />,
        <Server size={27} className='text-icon_color p-0.5 m-1' />,
        <Brain className='text-icon_color p-0.5 m-1' />,

      ],
    },

    {
      id: 6,
      title: 'Prácticas sobre los temas vistos',
      description: 'Encontrarás enlaces de prácticas sobre los temas vistos, además se incluyen respuestas de las mismas.',
      route: '/pruebas',
      icons: [
        <FileType size={27} className='text-icon_color p-0.5 m-1' />,
        <NotepadText size={27} className='text-icon_color p-0.5 m-1' />,
        <Link size={27} className='text-icon_color p-0.5 m-1' />

      ]
    },


  ];


  const [topic, setTopic] = useState(arrayTopics);

  const [search, setSearch] = useState('');

  const searchTopic = topic.filter(topic =>
    (topic.title).toLowerCase().includes(nfd(search).toLowerCase())) ||
    (topic.description).toLowerCase().includes(nfd(search).toLowerCase());


  return (
    <>
      <div className='flex justify-normal items-center flex-col animate__animated animate__fadeInDown'>
        <MainTitle />
        <SearchBar search={search} setSearch={setSearch} />
        <div className='flex flex-wrap items-center justify-center gap-x-36 gap-y-16 p-8'>
          {searchTopic.map(renderTopic => (<CardComponent
            key={renderTopic.id}
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
