import './style.css'

import { matematicaPage } from './pages/matematica'
import { lenguaPage } from './pages/lengua'
import { fraccionesPage } from './pages/fracciones'
import { balancePage } from './pages/balance'
import { energiaPage } from './pages/energia'

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

      <button id="btnFracciones">
  Fracciones
</button>

<button id="btnBalance">
  Balance
</button>

<button id="btnEnergia">
  Energía
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
  .addEventListener('click', () => {

    content.innerHTML = matematicaPage()

  })

document.querySelector('#btnLengua')
  .addEventListener('click', () => {

    content.innerHTML = lenguaPage()

  })