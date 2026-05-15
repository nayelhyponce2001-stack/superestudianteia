import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">

    <header>
      <h1>SuperEstudiante IA</h1>

      <p>
        Respuestas, tareas y ayuda escolar para estudiantes del Ecuador.
      </p>
    </header>

    <section class="search-box">

      <input 
        type="text" 
        placeholder="Ejemplo: Resolver fracciones 9no EGB"
      />

      <button>
        Buscar
      </button>

    </section>

    <section class="cards">

      <div class="card">
        <h2>Matemática</h2>

        <p>
          Ejercicios resueltos paso a paso.
        </p>
      </div>

      <div class="card">
        <h2>Ciencias</h2>

        <p>
          Tareas y explicaciones fáciles.
        </p>
      </div>

      <div class="card">
        <h2>Lengua</h2>

        <p>
          Resúmenes y actividades escolares.
        </p>
      </div>

    </section>

  </div>
`