const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right");

// Ecoute des événements

arrowRight.addEventListener("click", () => {
	right()
});

arrowLeft.addEventListener("click", () => {
	left()
})

// Déclarer les fonctions

function right() {
console.log('vous avez cliquez à droite')
};

function left() {
	console.log('vous avez cliquez à gauche')
};