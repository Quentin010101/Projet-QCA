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
        console.log(imageDistanceTop)
        console.log(window.innerHeight)
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