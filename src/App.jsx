import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi sitio web que es css.grid</h1>
      <div className="card">
       
        <p>
          <h2><center> Diseño de Sitio Web - (301122_9) 2023 - Periodo 16-01
            Mauricio Fernando Arce Monsalve
Programa: Ingeniaría de sistemas
fecha de creación: 25/05/2023</center></h2> 
        </p>
      </div>
      <p className="read-the-docs">
      <h3><center>Mis datos de contacto son:
Skype:mau_fernando@hotmail.com
Teléfono: 3223252232 - 6076996157
Email:mfarcem@unadvirtual.edu.co
</center></h3>
      </p>
      <a class="nav-link " href="Index1.html">Ir a la pagina de Inicio</a>	
    </>
  )
}

export default App
