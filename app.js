$(document).ready(function() {

    $('#buttoncontainer .1').click(function() {
      $('.imgcontainer .pic1').animate({ "left": "0%" }, "slow" );
      $('.imgcontainer .pic2').animate({ "left": "100%" }, "slow" );
      $('.imgcontainer .pic3').animate({ "left": "200%" }, "slow" );
    });
    $('#buttoncontainer .2').click(function() {
        $('.imgcontainer .pic1').animate({ "left": "-100%" }, "slow" );
        $('.imgcontainer .pic2').animate({ "left": "0%" }, "slow" );
        $('.imgcontainer .pic3').animate({ "left": "100%" }, "slow" );

    });
    $('#buttoncontainer .3').click(function() {
      $('.imgcontainer .pic1').animate({ "left": "-200%" }, "slow" );
      $('.imgcontainer .pic2').animate({ "left": "-100%" }, "slow" );
      $('.imgcontainer .pic3').animate({ "left": "0%" }, "slow" );
    });
});
/*
faire un tableau d'une longueur x ( x étant le nombre de div ( idée faire un tableau ayant une taill dynamiquement crée afin qu'il soit de la taille du nombre de divs donc si 20 div alors le tableau aura 19 index)afin de permettre un réutilisation du code et d'en faire un plus robuste capable de marcher avec 3 images, 5000 ou plus et donc déplacer toute les images en même temps de par example - 200% ou -100%   bouger le 5 en première page donc -400% sur tout les éléments  idée de variable étant y = numéro de l'image +1*100 si elle est après alors - devant si avant alors + on aurait un genre de .animate({ "left": "y%" })
*/
