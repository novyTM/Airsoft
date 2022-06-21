const content = document.querySelectorAll('.content')
const nav = document.querySelectorAll('.menu-tab')



const showInfo = id => {

    content.forEach(section => section.style.display = 'none')
    nav.forEach(tab => tab.classList.remove('menu-tab-active'))

    document.getElementById(id).style.display = 'block'

    const currentActiveButton = document.querySelector(`[data-id=${id}]`)
    currentActiveButton.classList.add('menu-tab-active')
    
}