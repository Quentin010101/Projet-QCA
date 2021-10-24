const dropArea = document.querySelector('.drop-area')
const eventArray = ['dragenter','dragover','dragleave','drop']
const enterArray = ['dragenter','dragover']
const leaveArray = ['dragleave','drop']
const containerImage = document.querySelector('.container-image')
let imgName

function active(){
    dropArea.classList.add('activeDrop')
}
function inactive(){
    dropArea.classList.remove('activeDrop')
}
function prevents(e){
    e.preventDefault()
}


eventArray.forEach(function(evt){
    dropArea.addEventListener(evt, prevents)
})
enterArray.forEach(function(evt){
    dropArea.addEventListener(evt, active)
})
leaveArray.forEach(function(evt){
    dropArea.addEventListener(evt, inactive)
})


dropArea.addEventListener('drop', gererDrop)
let urlImageDroped

function gererDrop(evt){
    const data = evt.dataTransfer
    const files = data.files
    const reader = new FileReader()

    reader.readAsDataURL(files[0])
    reader.onload = () => {
        urlImageDroped = reader.result 
        containerImage.style.backgroundImage = `url('${urlImageDroped}')`
    }
}

// --------------------- Affichage des images ------------------------
const buttonValider1 = document.querySelector('.button-img1')
const buttonValider2 = document.querySelector('.button-img2')
const buttonDefaultImg = document.querySelector('#reloadImage')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')

buttonValider1.addEventListener('click', function(){
    img1.src = urlImageDroped
    choixImage1()
})
buttonValider2.addEventListener('click', function(){
    img2.src = urlImageDroped
    choixImage2()
})
function choixImage1 (){
    localStorage.setItem('image1', urlImageDroped)
}
function choixImage2 (){
    localStorage.setItem('image2', urlImageDroped)
}
buttonDefaultImg.addEventListener('click', function(){
    localStorage.removeItem("image1")
    localStorage.removeItem("image2")
})
