const prompt = require("prompt-sync")()

// let piece = randomize(0,1)
// let choice = prompt("entre un chiffre entre 0 et 1")

// console.log(choice);


// if (piece == choice) {
//     console.log("Gagné");

// }else {
//     console.log("perdu")
// }
//




//exo2

// const mdpUser = prompt("entre ton mdp")

// if (mdpUser === "12345") {
//     console.log("acces autorisé");
    
// }else {
//     console.log("acces refusé");
    
// }




//exo1

// const prompt = require("prompt-sync")()

// let nombre = parseFloat( prompt("entre un chiffre"))

// if(nombre < 0){
//     console.log("Négatif");
// } else  if(nombre ==0){
//     console.log("Egal a 0");

// }else {
//     console.log("positif");
    
// }

//





//exo3 

// const prompt = require("prompt-sync")()

// const choiceOne = prompt("Entre un nombre")
// const choiceTwo = prompt("Entre un second nombre")
// const choiceThree = prompt("Entre un troisième nombre")

// if (choiceOne > choiceTwo && choiceOne > choiceThree) {
//     console.log(choiceOne + " est le plus grand ");

// }else if (choiceTwo > choiceOne && choiceTwo > choiceThree){
//     console.log(choiceTwo + " est le plus grand ");
    
// }else {
//     console.log(choiceThree + " est le plus grand ");
    
// }





//exo 4

// const prompt = require("prompt-sync")()

// const choiceOne = prompt("Entre un chiffre entre 0 et 7")

// if (choiceOne > 7){
//     console.log("Nombre invalide");
// }

// else if (choiceOne == 1){
//     console.log("Lundi");
// }


// else if (choiceOne == 2){
//     console.log("Mardi");
// }

// else if (choiceOne == 3){
//     console.log("Mercredi");
// }

// else if (choiceOne == 4){
//     console.log("Jeudi");
// }

// else if (choiceOne == 5){
//     console.log("Vendredi");
// }

// else if (choiceOne == 6){
//     console.log("Samedi");
// }

// else if (choiceOne == 7){
//     console.log("Dimanche");
// }






//correc exo 4 whith SWITCH

// switch (choiceOne) {
//     case 1:
//         console.log("lundi");
//         break
//     case 2:
//         console.log("mardi");
//         break
//     case 3:
//         console.log("mercredi");
//         break
//     case 4: 
//         console.log("jeudi");
//         break
//     case 5:
//         console.log("vendredi");
//         break
//     case 6:
//         console.log("samedi");
//         break
//     case 7:
//         console.log("dimanche");
//         break
//     default:
//         console.log("nombre invalide");
//         break
// }




//exo 5

// const prompt = require("prompt-sync")()

// const choiceOne = prompt ("Entre un nombre")
// const choiceTwo = prompt("Entre un deuxième nombre")

// if (choiceOne > choiceTwo) {
//      console.log(choiceOne + " est le plus grand ");

//  }else if (choiceTwo > choiceOne ){
//      console.log(choiceTwo + " est le plus grand ");

// }else  {
//      console.log(choiceThree + " Égal ");
  
//  }




//exo 6

// const prompt = require("prompt-sync")()

//  const choiceOne = prompt ("Entre un nombre")
//  const choiceTwo = prompt("Entre un deuxième nombre")

//  if(choiceOne * choiceTwo < 0){
//      console.log("Négatif");

// } else {
//      console.log("Positif");

//  }




//exo 7

// const prompt = require("prompt-sync")()

// const choice = parseFloat (prompt ("Entrez une température"))

// if (choice < 0){
//     console.log("État : Solide");

// }else if ( choice <100){
//     console.log("État : Liquide");

// }else  {
//     console.log("État : Gazeux");
    
// }







//exo 8





// const number = parseFloat (prompt ("Nombres de cadres :"))

// if (number <= 10 ){
//     console.log(number*20);
    
// }else if (number > 10 && number < 30){
//     console.log((number-10)*15+200);
    
// }else if(number >30){
//     console.log((number-30)*5+500)
// }




//ex 9 



// const age = prompt ("Votre âge :")
// const sexe = prompt ("Votre sexe :")

// if (age  > 20 && sexe === "Homme" || age > 18 && age < 35 && sexe === "Femme" ){
//     console.log("Imposable");
    
    

// }else{
//     console.log("Non - imposable");
    
// }




    



