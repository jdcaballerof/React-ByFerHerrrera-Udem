import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <GifExpertApp />
  </React.StrictMode>
)

// <React.StrictMode>   El modo estrico solo se aplica en desarrollo, si se quita solo se dispra una vez la funcion y ya no 2 veces
