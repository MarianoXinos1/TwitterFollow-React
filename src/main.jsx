import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(         //ReactDOM.createRoot = crea el punto de entrada(raiz) para el renderizado en el DOM.
  <React.StrictMode>              
    <App />
  </React.StrictMode>,                                              // React.StrictMode = componente especial para identificar problemas, que activa comprobaciones y advertencias adicionales para sus componentes hijos.
)
