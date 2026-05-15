import './style.css'

import { matematicaPage } from './pages/matematica'
import { lenguaPage } from './pages/lengua'

document.querySelector('#app').innerHTML = `

  <div class="container">

    <header>

      <h1>SuperEstudiante IA</h1>

      <p>
        Plataforma educativa para estudiantes del Ecuador
      </p>

    </header>

    <nav>

      <button id="btnMate">
        Matemática
      </button>

      <button id="btnLengua">
        Lengua
      </button>

    </nav>

    <main id="content">

      <h2>
        Bienvenido
      </h2>

      <p>
        Selecciona una materia.
      </p>

    </main>

  </div>

`

const content = document.querySelector('#content')

document.querySelector('#btnMate')
.addEventListener('click', ()=>{

  content.innerHTML = matematicaPage()

})

document.querySelector('#btnLengua')
.addEventListener('click', ()=>{

  content.innerHTML = lenguaPage()

})