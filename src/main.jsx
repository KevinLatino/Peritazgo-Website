import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasicKnowledgeScreen } from './Components/BasicKnowledgeScreen.jsx'
import { ExpressionScreen } from './Components/ExpressionScreen.jsx'
import { ControlStructure } from './Components/ControlStructure.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/BasicKnowledgeScreen',
    element: <BasicKnowledgeScreen />
  },
  {
    path: '/ExpressionScreen',
    element: <ExpressionScreen />
  },
  {
    path: '/ControlStructure',
    element: <ControlStructure />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
