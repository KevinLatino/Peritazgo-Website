import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasicKnowledgeScreen } from '../src/Components/Articles/BasicKnowledge/BasicKnowledge.jsx'
import { ExpressionScreen } from '../src/Components/Articles/ExpressionScreen/ExpressionScreen.jsx'
import { ControlStructure } from '../src/Components/Articles/ControlStructure/ControlStructure.jsx'
import { DataBase } from './Components/DataBasesComponent/DataBase.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataStructure } from './Components/Articles/DataStructure/DataStructure.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Aprendiendo',
    element: <BasicKnowledgeScreen />
  },
  {
    path: '/Expresiones',
    element: <ExpressionScreen />
  },
  {
    path: '/Estructuras-de-control',
    element: <ControlStructure />
  },
  {
    path: '/Estructuras-de-datos',
    element: <DataStructure />
  },
  {
    path: '/Bases-de-datos',
    element: <DataBase />
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
