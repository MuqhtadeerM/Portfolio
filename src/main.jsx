import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './Portfolio'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>
)
