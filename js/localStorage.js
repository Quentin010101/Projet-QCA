const root = document.querySelector(':root')

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


//----------------- recuperation image from admin ---------------------------
let imgVente1 = document.getElementById('imgVente1')
let urlImg1 = localStorage.getItem('image1')
let imgVente2 = document.getElementById('imgVente2')
let urlImg2 = localStorage.getItem('image2')

function changementImg (){
    if(urlImg2){
        imgVente2.src = urlImg2
    }
    if(urlImg1){
        imgVente1.src = urlImg1
    }
}
changementImg()