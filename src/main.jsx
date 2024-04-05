import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/Main/App'
import './Components/Main/index.css'
import { BasicKnowledgeScreen } from '../src/Components/BasicKnowledge/BasicKnowledge.jsx'
import { ExpressionScreen } from '../src/Components/ExpressionScreen/ExpressionScreen.jsx'
import { ControlStructure } from '../src/Components/ControlStructure/ControlStructure.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataStructure } from './Components/DataStructure/DataStructure.jsx'

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
