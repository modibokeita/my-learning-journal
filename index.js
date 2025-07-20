const menuBar = document.getElementById('menu-bar')
const navLinks = document.getElementById('nav-links')

let isShow = false
menuBar.addEventListener('click', () => {
    if (isShow){
        navLinks.style.display = 'none'
        isShow = false
    }else{

        navLinks.style.display = 'flex'
        isShow = true
    }
    
})