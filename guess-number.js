 function guess () {

  var choixJoueur = prompt ("Choisissez un nombre entre 0 et 100!")

  var choixOrdi = Math.round(Math.random()* 100);
   console.log(choixOrdi);

  var game_over = 10;

  for (game_over = 0; game_over<11; game_over++) {
    if (choixOrdi == choixJoueur) {
     return "Bravo!";
    }
    else if(choixOrdi<choixJoueur) {
     choixJoueur = prompt ("Visez plus petit !")
    }
    else if (choixOrdi>choixJoueur) {
      choixJoueur = prompt ("Visez plus grand !")
    }
    }
      alert ("GAME OVER !")
  }

guess();