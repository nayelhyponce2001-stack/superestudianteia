export function articlePage(article){

  return `

    <div class="container">

      <nav>

        <a href="#/">
          Inicio
        </a>

      </nav>

      <div class="page">

        <h1>
          ${article.title}
        </h1>

        ${article.content}

      </div>

    </div>

  `
}