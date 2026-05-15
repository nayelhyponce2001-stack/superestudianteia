export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  document.querySelector('#btnFracciones')
.addEventListener('click', ()=>{

  content.innerHTML = fraccionesPage()

})

document.querySelector('#btnBalance')
.addEventListener('click', ()=>{

  content.innerHTML = balancePage()

})

document.querySelector('#btnEnergia')
.addEventListener('click', ()=>{

  content.innerHTML = energiaPage()

})
}
