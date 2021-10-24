const root = document.querySelector(':root')
const colorP = document.getElementById('primaryColor')
const colorS = document.getElementById('secondaryColor')
const colorT = document.getElementById('tertiaryColor')
const button1 = document.getElementById('button-admin-color1')
const button2 = document.getElementById('button-admin-color2')
const button3 = document.getElementById('button-admin-color3')
const alpha1 = document.getElementById("alpha1")
const alpha2 = document.getElementById("alpha2")
const alpha3 = document.getElementById("alpha3")
let colorRGB

// -------------Changement des couleurs--------------
let color1 = localStorage.getItem('primaryKey')
let color2 = localStorage.getItem('secondaryKey')
let color2bis = localStorage.getItem('secondaryOpacityKey')
let color3 = localStorage.getItem('teriaryKey')
let color3bis = localStorage.getItem('teriaryOpacityKey')


root.style.cssText += color1
root.style.cssText += color2
root.style.cssText += color2bis
root.style.cssText += color3
root.style.cssText += color3bis


// ------------ conversion couleur input en rgba----------
function convertisseur (parm, al){
    let color = parm.value
    let arr = color.split('#')
    let colorOnly = arr[1]
    let colorRHex = colorOnly.slice(0,2)
    let colorGHex = colorOnly.slice(2,4)
    let colorBHex = colorOnly.slice(4,6)
    let colorR = parseInt(colorRHex,16)
    let colorG = parseInt(colorGHex,16)
    let colorB = parseInt(colorBHex,16)
    colorRGB = "rgba(" + colorR + "," + colorG + "," + colorB + "," + al.value + ")"
}
button1.addEventListener('click', function(){
    convertisseur(colorP, alpha1)
    let primaryVariable = "--primary-bg-color-black: " + colorRGB
    root.style.cssText += primaryVariable
    localStorage.setItem('primaryKey', primaryVariable)
})
button2.addEventListener('click', function(){
    convertisseur(colorS, alpha2)
    let secondaryVariable = "--secondary-bg-color : " + colorRGB
    let secondaryVariableOpacity = "--secondary-bg-color-opacity : " + colorRGB
    root.style.cssText += secondaryVariable
    root.style.cssText += secondaryVariableOpacity
    localStorage.setItem('secondaryKey', secondaryVariable)
    localStorage.setItem('secondaryOpacityKey', secondaryVariableOpacity)
})
button3.addEventListener('click', function(){
    convertisseur(colorT, alpha3)
    let teriaryVariable = "--teriary-bg-color: " + colorRGB
    let teriaryVariableOpacity = "--teriary-bg-color-opacity: " + colorRGB
    root.style.cssText += teriaryVariable
    root.style.cssText += teriaryVariableOpacity
    localStorage.setItem('teriaryKey', teriaryVariable)
    localStorage.setItem('teriaryOpacityKey', teriaryVariableOpacity)
})
// window.addEventListener('load', function(){
//     root.style.cssText += "--primary-bg-color-black: " + colorP.value
// })
// ------------Dropdown Menue ----------------------

const menu1 = document.querySelector('.admin-color > div:nth-child(2)')
const menu2 = document.querySelector('.container-dropzone')
const icon1 = document.querySelector('.admin-color ion-icon')
const icon2 = document.querySelector('#icon2')

icon1.addEventListener('click', function(){
    menu1.classList.toggle('menu-toggle')
    icon1.classList.toggle('icon-rotate')
})
icon2.addEventListener('click', function(){
    menu2.classList.toggle('menu-toggle')
    icon2.classList.toggle('icon-rotate')
})
//---------------------------------------------------

// ---------------- Rafraichir -*--------------
const buttonReloadColor = document.getElementById("reloadColor")
buttonReloadColor.addEventListener('click', function(){
    localStorage.removeItem("primaryKey")
    localStorage.removeItem("secondaryKey")
    localStorage.removeItem("secondaryOpacityKey")
    localStorage.removeItem("teriaryOpacityKey")
    localStorage.removeItem("teriaryKey")
    window.location.reload()
})

