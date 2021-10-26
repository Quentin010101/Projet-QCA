
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

// ------------Dropdown Menue ----------------------

const menu1 = document.querySelector('.admin-color > div:nth-child(2)')
const menu2 = document.querySelector('.container-dropzone')
const menu3 = document.querySelector('.container-text')
const menu4 = document.querySelector('.container-panier')
const icon1 = document.querySelector('.admin-color ion-icon')
const icon2 = document.querySelector('#icon2')
const icon3 = document.querySelector('#icon3')
const icon4 = document.querySelector('#icon4')


icon1.addEventListener('click', function(){
    menu1.classList.toggle('menu-toggle')
    icon1.classList.toggle('icon-rotate')   
})
icon2.addEventListener('click', function(){
    menu2.classList.toggle('menu-toggle')
    icon2.classList.toggle('icon-rotate')
})
icon3.addEventListener('click', function(){
    menu3.classList.toggle('menu-toggle')
    icon3.classList.toggle('icon-rotate')
})
icon4.addEventListener('click', function(){
    menu4.classList.toggle('menu-toggle')
    icon4.classList.toggle('icon-rotate')
})

//---------------------------------------------------
//----------Vider corbeil-------------
const buttonPanier = document.querySelector('.vider')
buttonPanier.addEventListener('click', function(){
    localStorage.removeItem('valeurAchatKey')
    window.location.reload()
})
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

// ------------ Changement Police d'ecriture ----------

let radioButton1 = document.querySelectorAll('input[name=police1]')
let radioButton2 = document.querySelectorAll('input[name=police2]')
let radioButton3 = document.querySelectorAll('input[name=police3]')

radioButton1.forEach(function(){
    addEventListener('change', function(){
    let valuePolicePrincipal = document.querySelector('input[name=police1]:checked').value
    root.style.cssText += "--font1 : " + valuePolicePrincipal
    localStorage.setItem('font1Key',valuePolicePrincipal)
})    
})
radioButton2.forEach(function(){
    addEventListener('change', function(){
    let valuePolicePrincipal = document.querySelector('input[name=police2]:checked').value
    root.style.cssText += "--font2 : " + valuePolicePrincipal
    localStorage.setItem('font2Key',valuePolicePrincipal)
})    
})
radioButton3.forEach(function(){
    addEventListener('change', function(){
    let valuePolicePrincipal = document.querySelector('input[name=police3]:checked').value
    root.style.cssText += "--font3 : " + valuePolicePrincipal
    localStorage.setItem('font3Key',valuePolicePrincipal)
})    
})

// ---------------------Button ------------------------------


