const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Déclaration des variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
let i = 0;

// Ecoute des événements
arrowRight.addEventListener("click", () => {
  right();
});

arrowLeft.addEventListener("click", () => {
  left();
});

// Déclaration des fonctions
function right() {
  i++;
  if (i >= slides.length) {
    i = 0; // Réinitialise l'index à 0 si on dépasse la fin du tableau
  }
  displaySliderContent();
  console.log(i);
}

function left() {
  i--;
  if (i < 0) {
    i = slides.length - 1; // Réinitialise l'index à la dernière position si on passe en dessous de 0
  }
  displaySliderContent();
  console.log(i);
}

function displaySliderContent() {
  bannerImg.src = `./assets/images/slideshow/${slides[i].image}`; // Met à jour l'image
  bannerText.innerHTML = slides[i].tagLine; // Met à jour le tagLine
}
