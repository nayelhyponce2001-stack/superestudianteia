import { supabase } from '../lib/supabase'

export async function homePage(articles){

  const { data } = await supabase.auth.getUser()

  const user = data.user

  const cards = articles.map(article => {

    return `

      <a 
        href="#/${article.slug}" 
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

        <img 
          src="/logo.png" 
          alt="SuperEstudiante IA"
          class="logo"
        >

        <h1>
          SuperEstudiante IA
        </h1>

        <p>
          Tareas, respuestas y ayuda escolar para estudiantes del Ecuador
        </p>

      </header>

      <nav>

        ${
          user
          ?
          `
            <span class="user-email">

              ${user.email}

            </span>

            <a href="#" id="logoutBtn">
              Cerrar sesión
            </a>
          `
          :
          `
            <a href="#/login">
              Crear cuenta
            </a>
          `
        }

      </nav>

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

      <footer>

        <p>
          © 2026 SuperEstudiante IA
        </p>

      </footer>

    </div>

  `
}