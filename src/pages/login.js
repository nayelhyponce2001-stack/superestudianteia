import { supabase } from '../lib/supabase'

export function loginPage(){

  setTimeout(()=>{

    // REGISTRO

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

    // GOOGLE LOGIN

    const googleBtn = document.querySelector('#googleLogin')

    googleBtn.addEventListener('click', async()=>{

      await supabase.auth.signInWithOAuth({

        provider:'google'

      })

    })

  },100)

  return `

    <div class="container">

      <nav>

        <a href="#/">
          Inicio
        </a>

      </nav>

      <div class="page">

        <h1>
          Crear cuenta o iniciar sesión
        </h1>

        <button 
          id="googleLogin"
          class="google-btn"
        >

          Continuar con Google

        </button>

        <div class="separator">

          <span>o</span>

        </div>

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