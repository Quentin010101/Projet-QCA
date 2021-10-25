const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


//Menu burger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".ul-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Ferme le menu quand clic sur liens
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// Formulaire Pop-up
const button1 = document.getElementById("button1");
const popup = document.querySelector(".popup");
button1.addEventListener("click", function(){
popup.style.display = "block";
}
)

const button2 = document.getElementById("button2");
button2.addEventListener("click", function(){
popup.style.display = "block";
}
)

const button3 = document.getElementById("button3");
button3.addEventListener("click", function(){
popup.style.display = "block";
}
)

