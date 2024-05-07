import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BasicKnowledgeScreen} from '../src/Articles/BasicKnowledge/BasicKnowledgeScreen.jsx'
import { ExpressionScreen } from '../src/Articles/ExpressionScreen.jsx'
import { ControlStructure } from '../src/Articles/ControlStructureScreen.jsx'
import { Links } from '../src/Articles/LinkScreen.jsx'
import { DataStructure } from './Articles/DataStructureScreen.jsx'
import { DataBase } from '../src/Articles/DataBaseScreen.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/Revista-peritazgo',
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
  },
  {
    path: '/pruebas',
    element: <Links/>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
