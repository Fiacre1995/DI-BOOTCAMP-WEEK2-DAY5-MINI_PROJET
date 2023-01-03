/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste dans un premier temps à verifier si un nombre saisir par l'utilisateur est compris entre 0 et 10 et a afficher le resultat,
Puis dans la seconde partie a verifier si un nombre correspond a celui de l'ordinateur  et a afficher un message et au bout de 3 reprise incorrect a sortie du programme
@param: nombre, userNumber, computerNumber, compteur
@returns: playTheGame, compareNumbers
*/

/*======================== MINI PROJET =======================*/


//Premiere Partie

let nombre ="";
nombre = parseInt(nombre);

function playTheGame(){
    let confirmer = confirm("Voulez vous debutez le jeu ?");
    if(confirmer == true){
        nombre = prompt("Veuillez entrer un nombre compris entre 0 et 10");
        
        if((nombre >= 0) && (nombre <= 10)){
            NombreValable = Math.floor(Math.random() * 11);
            console.log(NombreValable);
        }else if(isNaN(nombre) == true) {
            alert("Désolé, pas un numéro, au revoir ");
        }else{
            alert("Désolé, ce n'est pas un bon chiffre, au revoir ");
        }

    }else{
        alert("Pas de Probleme, Au revoir");
    }
}


//Deuxieme Partie

let userNumber="";
userNumber = parseInt(userNumber);
let computerNumber="";
computerNumber = parseInt(computerNumber);
let compteur =0;

function compareNumbers(userNumber,computerNumber){
    
    computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);
    userNumber = prompt("Entrer un numero ");
    if( userNumber === computerNumber){
        alert("WINNER");
    }
    else {

            while(userNumber !== computerNumber){
                compteur = compteur + 1;
                if(compteur > 3){
                    alert("hors de chances");
                    break;
                }
                else if( userNumber == computerNumber){
                        alert("WINNER");
                        break;
                }else if(userNumber > computerNumber){
                        alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau");
                        userNumber = prompt("Entrer un nouveau numero ");
                }else if(userNumber < computerNumber) {
                        alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
                        userNumber = prompt("Entrer un nouveau numero ");
                    }
                
            }
            
        }

       
        
}

compareNumbers(userNumber,computerNumber);
