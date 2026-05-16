import { supabase } from '../lib/supabase'

export function loginPage(){

  setTimeout(()=>{

    const form = document.querySelector('#loginForm')

    form.addEventListener('submit', async(e)=>{

      e.preventDefault()

      const email = document.querySelector('#email').value

      const password = document.querySelector('#password').value

      const { error } = await supabase.auth.signUp({

        email,
        password

      })

      if(error){

        alert(error.message)

        return
      }

      alert('Cuenta creada correctamente')

    })

  },100)

  return `

    <div class="container">

      <nav>

        <a href="/" data-navigo>
          Inicio
        </a>

      </nav>

      <div class="page">

        <h1>
          Crear cuenta
        </h1>

        <form id="loginForm" class="form">

          <input 
            type="email"
            id="email"
            placeholder="Correo"
            required
          >

          <input 
            type="password"
            id="password"
            placeholder="Contraseña"
            required
          >

          <button type="submit">

            Registrarse

          </button>

        </form>

      </div>

    </div>

  `
}