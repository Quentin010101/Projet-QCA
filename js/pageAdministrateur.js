const root = document.querySelector(':root')
const colorP = document.getElementById('primaryColor')
const colorS = document.getElementById('secondaryColor')
const colorT = document.getElementById('tertiaryColor')
const button1 = document.getElementById('button-admin-color1')
const button2 = document.getElementById('button-admin-color2')
const button3 = document.getElementById('button-admin-color3')

// -------------Changement des couleurs--------------

button1.addEventListener('click', function(){
    root.style.cssText += "--primary-bg-color-black: " + colorP.value
})
button2.addEventListener('click', function(){
    root.style.cssText += "--secondary-bg-color : " + colorS.value
})
button3.addEventListener('click', function(){
    root.style.cssText += "--teriary-bg-color: " + colorT.value
})

// ------------Dropdown Menue ----------------------

const menu1 = document.querySelector('.admin-color > div:nth-child(2)')
const icon1 = document.querySelector('.admin-color ion-icon')

icon1.addEventListener('click', function(){
    menu1.classList.toggle('menu-toggle')
    icon1.classList.toggle('icon-rotate')
})