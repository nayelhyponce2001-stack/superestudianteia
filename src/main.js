import './style.css'

import Navigo from 'navigo'

import { homePage } from './pages/home'

import { articlePage } from './pages/article'

import { loginPage } from './pages/login'

import { articles } from './data/articles'

import { supabase } from './lib/supabase'

const app = document.querySelector('#app')

const router = new Navigo('/', {
  hash:true
})

async function renderHome(){

  app.innerHTML = await homePage(articles)

  const logoutBtn = document.querySelector('#logoutBtn')

  if(logoutBtn){

    logoutBtn.addEventListener('click', async()=>{

      await supabase.auth.signOut()

      location.reload()

    })

  }

}

router
.on('/', async()=>{

  await renderHome()

})

.on('/login', ()=>{

  app.innerHTML = loginPage()

})

articles.forEach(article => {

  router.on(`/${article.slug}`, ()=>{

    app.innerHTML = articlePage(article)

  })

})

router.resolve()