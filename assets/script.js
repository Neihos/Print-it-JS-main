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
const dotsContainer = document.querySelector(".dots");
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
  updateActiveDot(); // Met à jour le dot actif
  console.log(i);
}

function left() {
  i--;
  if (i < 0) {
    i = slides.length - 1; // Réinitialise l'index à la dernière position si on passe en dessous de 0
  }
  displaySliderContent();
  updateActiveDot(); // Met à jour le dot actif
  console.log(i);
}

function displaySliderContent() {
  bannerImg.src = `./assets/images/slideshow/${slides[i].image}`; // Met à jour l'image
  bannerText.innerHTML = slides[i].tagLine; // Met à jour le tagLine
}

// Générer les dots
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span"); // Crée un élément 'span' pour chaque dot
    dot.classList.add("dot"); // Ajoute la classe 'dot' pour le style

    if (index === i) {
      dot.classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au dot correspondant à l'image initiale
    }

    // Ajoute un événement de clic à chaque dot
    dot.addEventListener("click", () => {
      i = index; // Met à jour l'index 'i' en fonction du dot cliqué
      updateActiveDot(); // Met à jour la classe active pour le dot
      displaySliderContent(); // Affiche l'image et le texte correspondant
    });

    dotsContainer.appendChild(dot); // Ajoute le dot au conteneur des dots
  });
}

// Met à jour la classe 'dot_selected' du dot correspondant à l'image affichée
function updateActiveDot() {
  const dots = document.querySelectorAll(".dot"); // Sélectionne tous les dots
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected"); // Retire la classe 'dot_selected' de tous les dots
    if (index === i) {
      dot.classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au dot correspondant à l'index actuel
    }
  });
}

createDots(); // Crée les dots au démarrage