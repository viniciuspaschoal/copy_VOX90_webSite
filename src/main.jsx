import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MaisPedidas from './components/MaisPedidas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HeroSection />
    <MaisPedidas />
  </StrictMode>,
  
)
