export function homePage(articles){

  const cards = articles.map(article => {

    return `

      <a 
        href="/${article.slug}" 
        data-navigo 
        class="card"
      >

        <h3>
          ${article.title}
        </h3>

        <p>
          Ver explicación completa.
        </p>

      </a>

    `

  }).join('')

  return `

    <div class="container">

      <header>

        <h1>
          SuperEstudiante IA
        </h1>

        <p>
          Tareas, respuestas y ayuda escolar para estudiantes del Ecuador
        </p>

      </header>

      <section class="search-box">

        <input 
          type="text"
          placeholder="Buscar tarea..."
        >

        <button>
          Buscar
        </button>

      </section>

      <h2 class="section-title">
        Contenido educativo
      </h2>

      <section class="cards">

        ${cards}

      </section>

    </div>

  `
}