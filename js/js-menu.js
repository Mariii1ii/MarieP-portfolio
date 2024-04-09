/*ANIMATION HORIZONTALE DU MENU AVEC EFFET PARALAXE SUR LES IMAGES*/

/* On récupère et stocke l'élément du menu avec les images*/
const track = document.getElementById("image-track");

/* On récupère la position horizontale de la souris au moment du clic */
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

/* On détecte si le bouton de la souris est enfoncé et réinitialise la valeur mouseDownAt 
et on stocke la valeur précédente de percentage dans prevPercentage*/
const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  /* On calcule la valeur de déplacement horizontale de la souris 
  par rapport à la position de départ stockée dans mouseDownAt*/
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,

  /* On calcule le pourcentage de déplacement en fonction de la largeur de la fenêtre. 
  Ensuite, on utilise la valeur précédente de percentage stockée dans prevPercentage
  pour déterminer la prochaine valeur de percentage, 
  mais en limitant la valeur à un maximum de 0 et un minimum de -60. */
  maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -60);
  track.dataset.percentage = nextPercentage;
  
/* On anime la translation globale par rapport à la distance parcours par la souris */
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

/* On anime l'effet parallax des images */
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${50 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* On appele les fonctions avec des évènements souris ou tactile */
window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

/* Même fonctionnement avec la molette*/
window.addEventListener("wheel", (event) => {
  /*On récupère la valeur du scroll */
  const delta = event.deltaY;

  /* On calcule le pourcentage de déplacement en fonction de la largeur de la fenêtre. 
  Ensuite, on utilise la valeur précédente de percentage stockée dans prevPercentage
  pour déterminer la prochaine valeur de percentage, 
  mais en limitant la valeur à un maximum de 0 et un minimum de -100. */
  const maxDelta = window.innerWidth /6;
  const percentage = (delta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  track.dataset.percentage = nextPercentage;

  /* On anime la translation globale et le parallaxe des images*/
  track.animate({
      transform: `translate(${nextPercentage}%, -50%)`,
    }, { duration: 1200, fill: "forwards" }
  );
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
        objectPosition: `${100 + nextPercentage}% center`,
      }, { duration: 1200, fill: "forwards" }
    );
  }
});


/*ANIMATION EN RIDEAU EN SORTIE DE PAGE */

/* On selectionne tous les liens de la page */
let links = document.getElementsByClassName('legende');

console.log(links)

/* On récupère et stocke les éléments HTML pour les rideaux*/
Array.from(links).forEach((link) =>{
  console.log(link);
  link.onclick = (e) => {
    let haut = document.getElementById('volet-haut');
    let bas = document.getElementById('volet-bas');
    let body=document.querySelector('body');

/* On bloque le chargement automatique sur le click des liens*/
    e.preventDefault();

    /* On s'assure de pouvoir accéder au lien sur l'élément cliqué ou son parent */
    setTimeout(function(){
      if (body.classList.contains('disparition')){
        console.log("Ok");
        if( !e.srcElement.parentElement.href){
          window.location = e.srcElement.href;
        }else{
          window.location = e.srcElement.parentElement.href;
        }}
      else{
        console.log("problème", e.srcElement)
      }
    }, 1000);
    
    /*On anime les volets haut et bas */
    haut.classList.add('haut-animation');
    bas.classList.add('bas-animation');
    setTimeout(function(){
      body.classList.add('disparition');
    }, 800);
    
    /* Réinitialisation des animations pour permettre le bon affichage de la page en cas de retour */
    setTimeout(function(){
      body.classList.remove('disparition');
      haut.classList.remove('haut-animation');
      bas.classList.remove('bas-animation');
    }, 1100);

  }
})