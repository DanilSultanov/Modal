const showBtn = document.querySelector('.show-button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-button')
const overlay = document.querySelector('.overlay')

const hiddenFunction = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden') 
}




showBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden') 
})

closeBtn.addEventListener('click', () => {
  hiddenFunction()
})

overlay.addEventListener('click', () => {
   hiddenFunction() 
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape'){
      hiddenFunction()     
    }
})