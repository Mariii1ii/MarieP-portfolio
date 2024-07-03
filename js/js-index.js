
/* On crée un tableau avec chaque élément comportant une double span et on décalle de début de l'animation */ 

function AnimationTitre(selectionne){
    const titre = document.querySelector(selectionne)

    Array.from(titre.querySelectorAll('span span')).forEach((span, k) =>{
        span.style.animationDelay = (k * .2) + 's'
    })    
}


AnimationTitre('.titre')


/* Transition de page */

setTimeout(function(){
    document.getElementById('volet').remove();
}, 500)

/* On selectionne tous les liens de la page */
let bouton = document.getElementById('bouton');

bouton.onclick = (e) => {
    let cercle = document.getElementById('effet-transition')

    /* On bloque le chargement automatique sur le click des liens*/
    e.preventDefault();

    setTimeout(function(){
        if (bouton.classList.contains('disparition')){
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
    
    /*Ajout des classes necessaires à la transition */
    cercle.classList.add('effet-transition'); 
    setTimeout(function(){
        bouton.classList.add('disparition');
    }, 600);


    /* Enlève les classes necessaires à la transition 
    pour permettre le bon affichage de la page en cas de retour */
    setTimeout(function(){
        cercle.classList.remove('effet-transition');
        bouton.classList.remove('disparition');
    }, 1100);
            

}
