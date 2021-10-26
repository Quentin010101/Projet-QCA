//----------------------------------------------------------CAROUSEL

//slide de base


//Sélection du container englobant les slides
const slider = document.querySelector('.slideshow-container2');
//Quand je tiens mon carousel, je veux garder une trace de ça. Est-ce-que je tiens le carousel ou pas?
let holding = false;
//Quand je commence à faire glisser le carousel la première fois, je veux cette position (pour l'instant c'est indéfini)
let firstClickX;
/* "Ce qui a déjà était scroller."
A un moment donner il va falloir savoir si on a déjà scroller quelques choses et il va falloir le rajouter à une nouvelle valeur de scroll. */
let alreadyLeftScrolled;
//La vitesse de la transition
let velocity;
//Qui permet de faire des animations sur le web.
let rafID;



//Premier évènement


//mousedown = quand j'appuie avec la souris
slider.addEventListener('mousedown', e => {
    //Je suis en train de cliquer (tenir)
    holding = true;
    /* Détermine la position du premier clic.

    - e.pageX = c'est la longueur du curseur jusqu'au bord de la fenêtre.
    - slider.offsetLeft = c'est le décalage (la marge) par rapport au bord de la fenêtre ("offset" veut dire décalage).

    En gros du curseur jusqu'au bord de la fenêtre moins la marge. le curseur en forme de main repasse en flèche dés qu'il sort du carousel.
    */
    firstClickX = e.pageX - slider.offsetLeft;
    /* On aura déjà scroller des choses quand on aura utilisé le carousel et on veut garder une trace de ça.
    - scrollLeft = il définit le nombre de pixels quand le contenu est défilé vers la gauche.

    On va donc pouvoir scroller le contenu (les slides) de notre slideshow qui est le contenu de notre slideshow-container 
    Rappel pour plus de clarté : 
    <div class="slideshow-container"> englobe 
    <div class="slideshow"> qui englobe 
    <div class="slide s1">  jusqu'à  <div class="slide s5">
    
    Avec scrollLeft, on va pouvoir règler le glissement vers la droite, 
    pour que quand on essaye d'aller vers la gauche, il bloque le défilement au premier slide, si on spécifie une valeur inferieur à 0 (slider.scrollLeft = 0).
    Et on va pouvoir en plus règler l'autre côté (côté droit) en excédant la largeur totale du contenu, 
    donc du slideshow qui est à l'interieur de slideshow-container (par exemple "slider.scrollLeft = 2000") */
    alreadyLeftScrolled = slider.scrollLeft;
    //Annule la transition quand on reclique
    stopTransition()
})



//Deuxième évènement



// mousemove = quand je bouge la souris
slider.addEventListener('mousemove', e => {
    /* (!holding) = inverse de holding (le (!) veut dire NON, vrai devient faux et vice versa.
    Dans ce cas "if(!holding) return;" (holding = false) veut dire que si je n'attrape pas le carousel, l'animation ne se déclenche pas */
    if (!holding) return;
    /* Clic qui va s'actualiser quand on maintient le carousel pour le déplacer par rapport au premier clic
    ("firstClickX = e.pageX - slider.offsetLeft; qui est le premier clic). */
    const x = e.pageX - slider.offsetLeft;
    /* Calcul de ce qui a été scroller et qui est entre parenthèses car il va falloir faire les calculs de l'animation de vitesse. 
    Pour cela il faut utilser "console.log(alreadyLeftScrolled - scrolled" et faire attention aux valeurs ++ et -- qui avec la règle des signes = +.
    Comme les valeurs en allant à gauche sont négatives, le glissement est bloqué,
    et comme les valeurs de droite sont positives le glissement vers la droite se fera jusqu'à la limite du carousel.
    Le * 2 multiplie la vitesse du scroll. */
    const scrolled = (x - firstClickX) * 1.5;
    /* Trace du scroll qui a été fait.
     "aperçuScrollGauche = scrollLeft (qui définit le nombre de pixels quand le contenu est défilé vers la gauche) */
    const prevScrollLeft = slider.scrollLeft;
    /*Permet de bouger le carousel.
    Ce qui a été déjà scroller - le scroll */
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
    /* Vitesse par rapport à la vitesse du scroll avec la souris */
    velocity = slider.scrollLeft - prevScrollLeft;
})



//Troisième évènement



//mouseup = souris relevée
slider.addEventListener('mouseup', () => {
    //maintient = faux
    holding = false;
    //Démarre la transition quand on relâche la souris
    startTransition()
})


//mouseleave = souris qui quitte (le carousel dans notre cas)
slider.addEventListener('mouseleave', () => {
    //maintient = faux
    holding = false;
})



//Fonctions



/* A chaques fois qu'on va démarrer une transition ou va stopper celles qui seraient en cours */
function startTransition() {
    stopTransition();
    /* Appelle "(decreasingTransition)" */
    rafID = requestAnimationFrame(decreasingTransition);
}

/* On crée stopTransition (rafID = request animation frame ID donne une ID à l'animation) */
function stopTransition() {
    cancelAnimationFrame(rafID)
}

//Ralenti l'effet de transition
function decreasingTransition() {
    //le scroll du slideshow +=(ajoute 1) = vitesse à laquelle on scroll avec la souris
    slider.scrollLeft += velocity;
    //Rabaisse la vitesse "vitesse x 0.95" (par exemple "20+1x0.95 = 20.95" si on continue "20+1x0.95x0.95 = 20.9025" et ainsi de suite)
    velocity *= 0.95;
    //limite la baisse à 0.5, tant que la vitesse est superieur à 0.5, elle baisse
    if (Math.abs(velocity) > 0.5) {
        rafID = requestAnimationFrame(decreasingTransition)
    }
}



//Défilement tactile (répétition de plus haut version tactile)



slider.addEventListener('touchstart', e => {
    holding = true;
    // pageX => la largeur entre mon click et le DOCUMENT
    firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
    stopTransition()
})

slider.addEventListener('touchend', () => {
    holder = false;

    startTransition()
})

slider.addEventListener('touchmove', e => {
    if (!holding) return;
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX) * 1.2;
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
    velocity = slider.scrollLeft - prevScrollLeft;
})



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//----------------------------------------------------------FIN CAROUSEL