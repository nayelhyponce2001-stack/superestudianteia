import './style.css'

import Navigo from 'navigo'

import { homePage } from './pages/home'

import { articlePage } from './pages/article'

import { loginPage } from './pages/login'

import { articles } from './data/articles'

const app = document.querySelector('#app')

const router = new Navigo('/')

router.on('/', ()=>{

  app.innerHTML = homePage(articles)

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