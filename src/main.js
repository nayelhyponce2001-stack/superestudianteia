import './style.css'

import Navigo from 'navigo'

import { homePage } from './pages/home'
import { fraccionesPage } from './pages/fracciones'
import { balancePage } from './pages/balance'
import { energiaPage } from './pages/energia'

const app = document.querySelector('#app')

const router = new Navigo('/')

router
.on('/', ()=>{

  app.innerHTML = homePage()

})
.on('/fracciones', ()=>{

  app.innerHTML = fraccionesPage()

})
.on('/balance', ()=>{

  app.innerHTML = balancePage()

})
.on('/energia', ()=>{

  app.innerHTML = energiaPage()

})
.resolve()