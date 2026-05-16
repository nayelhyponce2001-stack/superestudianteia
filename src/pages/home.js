export function homePage(){

  return `

    <div class="container">

      <header>

        <h1>
          SuperEstudiante IA
        </h1>

        <p>
          Respuestas, tareas y ayuda escolar para estudiantes del Ecuador
        </p>

      </header>

      <section class="search-box">

        <input 
          type="text"
          placeholder="Buscar tarea o tema..."
        >

        <button>
          Buscar
        </button>

      </section>

      <h2 class="section-title">
        Materias populares
      </h2>

      <section class="cards">

        <a href="/fracciones" data-navigo class="card">

          <h3>
            Matemática
          </h3>

          <p>
            Fracciones, ejercicios y problemas resueltos.
          </p>

        </a>

        <a href="/balance" data-navigo class="card">

          <h3>
            Educación Financiera
          </h3>

          <p>
            Balance de gastos y ejemplos escolares.
          </p>

        </a>

        <a href="/energia" data-navigo class="card">

          <h3>
            Ciencias Naturales
          </h3>

          <p>
            Energía, naturaleza y ciencias.
          </p>

        </a>

      </section>

      <section class="info">

        <h2>
          Aprende más rápido
        </h2>

        <p>
          Encuentra tareas resueltas, explicaciones fáciles y ejercicios escolares paso a paso.
        </p>

      </section>

    </div>

  `
}