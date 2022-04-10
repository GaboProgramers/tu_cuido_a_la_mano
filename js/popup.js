const navItems = document.querySelector('.collapse')
const btnactivate = document.querySelector('.car')
const x = document.querySelector('.closed')
navItems.style.display = 'none'
btnactivate.addEventListener('click',()=>{
    navItems.style.display = 'flex'
    btnactivate.classList.remove('fa-shopping-cart')
    x.classList.add('closedActive')
    x.classList.add('fa-times')
    })
x.addEventListener('click',()=>{
x.classList.remove('fa-times')
navItems.style.display = 'none'


btnactivate.classList.add('fa-shopping-cart')
})