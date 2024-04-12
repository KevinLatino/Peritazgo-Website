import React from 'react'
import { MainTitle } from '../MainTitle/MainTitle';
import { CardComponent } from '../CardComponent/CardComponent';
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from 'react';
import { BookCheck } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Shapes } from 'lucide-react';
import { GitCompareArrows } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import 'animate.css';
import './App.css'


function App() {
  const arrayTopics = [

    {
      title: 'Entiende las bases',
      description: 'Se abordan temas básicos, variables, algoritmos, pseudocódigo, diagramas de flujo.',
      route: '/Aprendiendo',
      icon: <BookCheck size={21} className='icon-card' />,
      icon2: <Shapes size={21} className='icon-card' />,
      icon3: <BookOpenText size={21} className='icon-card' />
    },

    {
      title: 'Expresiones',
      description: 'Se abordan temas como valores, distintos tipos de operadores y distintos tipos de expresiones.',
      route: '/Expresiones',
      icon: <Brain size={21} className='icon-card' />,
      icon2: <CirclePlus size={21} className='icon-card' />,
      icon3: <BrainCircuit size={21} className='icon-card' />
    },

    {
      title: 'Estructuras de control',
      description: 'Componentes de la programación que permiten controlar el flujo de ejecución de un programa',
      route: '/Estructuras-de-control',
      icon: <GitCompareArrows size={21} className='icon-card' />,
      icon2: <Workflow size={21} className='icon-card' />,
      icon3: <RefreshCcw size={21} className='icon-card' />
    },

    {
      title: 'Estructuras de datos',
      description: 'Son las que organizan nuestro proyecto en ejecución, aprende terminos como que es un dato',
      route: 'Estructuras-de-datos',
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
      <div className='animate__animated animate__fadeInDown'>
        <MainTitle />
        <SearchBar search={search} setSearch={setSearch} />
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
    </>


  )
}

export default App
