/* SMOOTH SCROLL */

/*On récupère dans des variables le body, la div 'smooth-scroll', 
la hauteur de l'écran, et la vitesse de défilement voulue */
const body = document.body;
const scrollWrap = document.getElementsByClassName("smooth-scroll")[0];
const height = scrollWrap.getBoundingClientRect().height - 1;
const speed = 0.08;

var offset = 0;

body.style.height = Math.floor(height) + "px";

/* On défini la fonction smoothScroll
On récupère la valeur du scroll que l'on multiplie à la vitesse de défilement
On réinjecte la valeur calculée dans un translate Y permettant de faire bouger la div 'smooth-scroll'*/
function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

/* On appele la fonction smoothScroll*/
smoothScroll();



/* APPARITION DES BLOCS EN FONCTION DE LA POSITION DE LA PAGE */

/* On défini le taux de pourcentage des éléments devant être affichés
et on crée le dictionnaire necessaire à l'API 'IntersectionObserver' */ 
//const pourcentageVisibilite = 0.3
//const options = {
  //root: null,
 // rootMargin: '0px',
  //threshold: 0.3
//}

/* On crée la fonction testant si l'élément est visible à l'écran
Si son pourcentage de visibilité est suffisant la class animation-bloc est retirer 
et la classe animation-bloc-visible est ajouté */
//const handleIntersect = function (entries, observer) {
 // entries.forEach(function (entry) {
  //  if (entry.intersectionRatio > pourcentageVisibilite) {
   //   entry.target.classList.remove('animation-bloc')
    //  entry.target.classList.add('animation-bloc-visible')
     // observer.unobserve(entry.target)
   // }
  //})
//}

/* Au chargement de la page, on crée l'API IntersectionObserver 
et on récupère les éléments avec la classe .animation-bloc
Pour chaque élément on lance la fonction handleIntersect*/
//window.addEventListener("DOMContentLoaded", function () {
 // const observer = new IntersectionObserver(handleIntersect, options)
  //const targets = document.querySelectorAll('.animation-bloc')
  //targets.forEach(function (target) {
   // observer.observe(target)
  //})
//})
