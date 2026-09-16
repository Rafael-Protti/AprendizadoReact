import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Empresa from './Empresa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Empresa/>
  </StrictMode>,
)
