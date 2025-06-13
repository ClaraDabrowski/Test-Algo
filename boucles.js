const prompt = require("prompt-sync")()


//exo1
// let i =0

// for (let i = 0; i <= 10; i ++) {
//    console.log(i);

// }



//exo2
// let somme = 0
// for (let i = 0; i <= 100; i++) {
//     somme = somme + i 
// }

// console.log(somme);




//exo3

// const choice = parseFloat(prompt("Entrer un nombre"))

// for (let i = 1; i <= 10; i++) {
//     console.log(i + "x" + choice + "=" + i*choice);
// }

// const choice = parseFloat(prompt("Entrer un nombre"))

// let index = 1
// while (index <= 10) {
//      console.log(index + "x" + choice + "=" + index*choice);
//     index++
// }




// const choice = parseFloat(prompt("Entre un nombre"))

// for (let i = 1; i <= 10; i++) {
//     console.log(i + "x" + choice + "=" + i*choice);

// }





//exo4


// afficher des nombres de 1 a 10

// let index=0

// while ( index <= 10){

//     console.log(index);
//      index++

// }




//calculer la somme des nombres de 1 a 100 =5050


// //exo2
// let somme = 0
// for (let i = 1; i <= 100; i++) {
//     somme = somme + i 
// }

// console.log(somme);



// entrez un nombre et afficher sa table de 1 a 10

// const choice = parseFloat(prompt("Entrez un nombre"))

// for (let index = 0; index <= 10; index++) {
//    console.log(index + "x" + choice + "=" +index*choice);


// }




//somme des nombres de 1 a 100

// let somme = 0

// for (let index = 0; index <=100 ; index++) {
//    somme = somme + index

// }
// console.log(somme);




// afficher nombre de 1 a 10

// let number =0

// for (let index = 0; index <= 10; index++) {
//     console.log(index);


// }


//somme des nombres de 1 a 100

// let somme =0

// for (let index = 0; index <=100; index++) {

//     somme = somme+index
// }
// console.log(somme);




// entrez un nombre et afficher sa table de 1 a 10

//  const number = parseFloat(prompt("Entre un nombre"))

//  for (let index = 0; index <=10; index++) {
//     console.log(index + "x" + number + "=" +number*index);


//  }





//  Exercice 4 : Pyramide de 1
// Écrivez un programme qui affiche une pyramide composée de chiffres 1 a l’aide d’une boucle
// La pyramide doit avoir 5 étages
// Voici un exemple de pyramide
// 1
// 11
// 111
// 1111
// 11111


// let pyr = ""

// for (let index = 0; index < 5; index++) {
//     pyr = pyr + "1"
//     console.log(pyr);


// }



//let somme = 0
// for (let i = 0; i <= 100; i++) {
//     somme = somme + i 
// }

// console.log(somme);



// Exercice 1 : Affichage des nombres de 1 à 10

// let number =0
// for (let index = 0; index <= 10; index++) {
//     console.log(index);

// }

// let number =0
// let index =0

// while (index <10) {
//     index ++
//     console.log(index);


// }


// Exercice 2 : Calcul de la somme des nombres de 1 à 100

// let somme = 0

// for (let index = 1; index <=100; index++) {
//      somme = somme +index

// }
// console.log(somme);



// let somme = 0
// let index = 0
// while (index <100) {
//     index++
//     somme= somme +index  
// }
// console.log(somme);


// Exercice 3 : Table de multiplication
// Demander à l'utilisateur d'entrer un nombre et affichez sa table de multiplication de 1 à 10


// const number = parseFloat(prompt("Entre un nombre"))

// for (let index = 0; index <=10; index++) {
//     console.log(number + "x" + index +"=" +number *index);

// }

// const number = parseFloat(prompt("Entre un nombre"))
// index=0

// while (index <10) {
//     index++
//     console.log(number + "x" + index + "=" +number*index);


// }


// Exercice 4 : Pyramide de 1
// Écrivez un programme qui affiche une pyramide composée de chiffres 1 a l’aide d’une boucle
// La pyramide doit avoir 5 étages
// Voici un exemple de pyramide


// let pyr =""

// for (let index = 0; index <= 5; index++) {
//     pyr = pyr + "1"
//     console.log(pyr);

// }



// let pyr =""
// let index =0

// while (index <5) {
//     index++
//     pyr = pyr +"1"
//    console.log(pyr);




// }


//td2 exo 1



// let dossard = null
// let temps = null


// while (dossard != -1) {
//     dossard = parseFloat(prompt("Numero de dossard"))
//     if (dossard == -1) {
//         break
//     }
//     temps = parseFloat(prompt("Entrez le temps du dossard"))

// }







// Écrire un algorithme qui permet de simuler les affichages d’un compte à rebours à partir d’un
// temps (minutes, secondes) donné


//exo 2 td2
// Écrire un algorithme qui permet de simuler les affichages d’un compte à rebours à partir d’un
// temps (minutes, secondes) donné

// for (let index = 10; index >= 0; index--){
//     console.log(index);

// }

// let minutes = parseFloat(prompt("Entrez une minutes"))
// let secondes = parseFloat(prompt("Entrez une secondes"))

// for (let i= minutes; i >= 0; i--) {
//     for (let j = secondes; j >= 0; j--) {
//         console.log(i + "min" + j +"");


//     }secondes=59

//     } 







// td2 exo3
//     A la naissance de Paul, son père lui ouvre un compte bancaire. Ensuite, à chaque anniversaire,
// il verse sur son compte 150 euros, auxquels il ajoute le triple de l’âge de Paul. Par exemple,
// lorsqu’il a un an, il lui verse 153 euros, 2 ans, il lui verse 156 euros. Écrire un algorithme qui
// permet de déterminer quelle somme aura Paul lors de son nième anniversaire.




// let age = parseFloat (prompt("Age de Paul"))

// let sommed = 150
// let sommeaj =0

// for (let i = 1; i<= age; i++) {
//     sommeaj += sommed+ i*3

//     console.log("Paul a :"+ sommeaj + " Euros");

// }








// td2 exo 4

// Écrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise
// ensuite quel était le plus grand parmi ces 20 nombres.
// Modifiez ensuite l’algorithme pour que le programme affiche en quelle position avait été saisi
// ce nombre.

// let number = 0
// let max = 0
// let posi = 0


// for (let i = 0; i < 10; i++) {
//     number = parseFloat(prompt("Entrez un nombre"))
//     if (number > max) {
//         max = number
//         posi = i + 1
//     }
// }

// console.log("Nombre max = " + max +" en "+ posi+ "em position");







//td2exo 5
// Écrire un algorithme qui demande de saisir au clavier la taille de 6 personnes et qui calcule le
// nombre de personnes dont la taille est plus petite que 2,10 m.

// let size = 0
// let max = 2.10
// let number = 0

//   for (let i = 0; i < 6; i++) {
//       size = parseFloat (prompt(" Saisissez une taille"))

//     if (size > max) {

//         number = number + 1
        
//       }
//     }
//     console.log( number);
    


    // td2exo6

   // Un vote électronique est organisé, un ordinateur permet de saisir chaque vote et le
// comptabilise. Les électeurs peuvent répondre par O(oui), N(non) ou B(blanc). Écrire un
// algorithme qui demande à n électeurs leur vote et écrit à la fin du vote le pourcentage de Oui,
// Non et de votes blancs


// let vote = 0
// let O = 0
// let N = 0
// let B = 0
// let number = 5

// for (let i = 0; i < number ; i++) {
//     vote = prompt("Choisissez O(oui), N(non), ou B(blanc)")
//     if (vote == "O") {
//         O++
//     }

//     if (vote == "N") {
//         N++
//     }

//     if (vote == "B") {
//         B++
//     }
// } 

// O = (O / number) * 100;
// N = (N / number) * 100;
// B = (B / number) * 100;

// console.log("Pourcentage de Oui:"+ O + "%");
// console.log("Pourcentage de Non:"+ N +"%");
// console.log("Pourcentage de votes blancs:" + B +"%");






// td2exo7
// Écrire un programme qui lit un entier n puis affiche les nombres premiers. On appelle un
// nombre premier tout nombre qui ne peut être divisé que par 1 ou par lui-même.



// const nmb = parseFloat(prompt("Entrez un nombre"))
// let first = true

// for (let i = 2; i < nmb; i++) {
//   if (nmb % i === 0)
//     first = false
//   break
  
// }
// console.log(first + "pas premier");


