const img1 = document.querySelector('.sprite1')
const img2 = document.querySelector('.sprite2')
const img3 = document.querySelector('.sprite3')
const img4 = document.querySelector('.sprite4')
let position




window.addEventListener('scroll', function(){
    let imageDistanceTop = img1.getBoundingClientRect().top
    let scroll = window.scrollY
    if(position < scroll){
        if((imageDistanceTop - (window.innerHeight)/1.5) <0 && (imageDistanceTop - window.innerHeight/4) > 0){
            img1.style.transform = "translateY(0%)"
            img2.style.transform = "translateY(0%)"
            img3.style.transform = "translateY(0%)"
            img4.style.transform = "translateY(0%)"
            img1.style.transition = "transform 0.8s ease-in"
            img2.style.transition = "transform 0.8s ease-in"
            img3.style.transition = "transform 0.8s ease-in"
            img4.style.transition = "transform 0.8s ease-in"
        } else {
            img1.style.transform = "translateY(17%)"
            img2.style.transform = "translateY(5%)"
            img3.style.transform = "translateY(-5%)"
            img4.style.transform = "translateY(-40%)"
            img1.style.transition = "transform 0.8s ease-in"
            img2.style.transition = "transform 0.8s ease-in"
            img3.style.transition = "transform 0.8s ease-in"
            img4.style.transition = "transform 0.8s ease-in"
        }
    } else {
        if(imageDistanceTop > 0 && imageDistanceTop < window.innerHeight/2 ){
            img1.style.transform = "translateY(0%)"
            img2.style.transform = "translateY(0%)"
            img3.style.transform = "translateY(0%)"
            img4.style.transform = "translateY(0%)"
            img1.style.transition = "transform 0.8s ease-in"
            img2.style.transition = "transform 0.8s ease-in"
            img3.style.transition = "transform 0.8s ease-in"
            img4.style.transition = "transform 0.8s ease-in"
        } else {
            img1.style.transform = "translateY(17%)"
            img2.style.transform = "translateY(5%)"
            img3.style.transform = "translateY(-5%)"
            img4.style.transform = "translateY(-40%)"
            img1.style.transition = "transform 0.8s ease-in"
            img2.style.transition = "transform 0.8s ease-in"
            img3.style.transition = "transform 0.8s ease-in"
            img4.style.transition = "transform 0.8s ease-in"
        }

    }
    position = scroll
})



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


//-------------------------Cercle --------------------------------------
const buttonPlus = document.querySelectorAll('.buttonPlus')
const buttonMoins = document.querySelectorAll('.buttonMoins')
const cercle = document.querySelector('.cercle')

buttonPlus.forEach( function(e){
    e.addEventListener('click', function(){
        let oldValeur = parseInt(cercle.innerHTML)
        let newValeur = oldValeur + 1
        cercle.innerHTML = newValeur
        cercle.classList.add('cercle-active')
        setTimeout(function (){
            cercle.classList.remove('cercle-active')
        }, 1000)
    })
});
buttonMoins.forEach( function(e){
    e.addEventListener('click', function(){
        let oldValeur = parseInt(cercle.innerHTML)
        if(oldValeur == 0){
            return alert("buy more !!!!!!!!!")
        }
        let newValeur = oldValeur - 1
        cercle.innerHTML = newValeur
        cercle.classList.add('cercle-active')
        setTimeout(function (){
            cercle.classList.remove('cercle-active')
        }, 1000)
    })
});