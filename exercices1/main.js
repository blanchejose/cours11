/*Changer la couleur de fond d'un élément au survol de la souris :
○ Faites en sorte qu'au survol de la souris d'un élément, sa couleur de fond change.*/
$( "p" )
  .on( "mouseup", function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  } ); 
