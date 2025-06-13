

const prompt = require('prompt-sync')()
// exo 1 td4

// function sommeTableau (array){
//     let res = 0
//     for (let i = 0; i < array.length; i++) {
//         res += array[i]

//     }
//     return res


// }
// let tab = [2,4,2]
// console.log(sommeTableau(tab));






// exo 2 td4


// let array = [1,2,3,4,5,6,7,8,9]
// let res =0

// function filterPairs (array){
//     let res = []

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             res.push(array[i])
//         }

//     }
//     return res
// }
// console.log(filterPairs(array));





// exo 3 td4

// let array = [25,15,58]

// function trouverMaximum(array){
//     let max = 0

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] > max) {
//             max = array[i]
//         }

//     }
//      return max
// }

// console.log(trouverMaximum(array));



// exo 4  td4


// let array = [1, 2, 3, 4, 5]


// function inverserTableau(array){
//     let inv = []

//     for (let i = array.length - 1; i >=0 ; i--) {

//       inv.push(array[i])
//     }
//     return inv
// }
// console.table(inverserTableau(array));







// exo 1 td 4 les tableaux 





// function somme (){
//   let resArray = []
//   let sum = 0
//   let choice = 0

//   for (let i = 0; i < 5; i++) {
//     choice = parseFloat(prompt('entre un chiffre'))
//     resArray.push(choice)
//     sum+=choice
//   }
// return [resArray, sum]
// }

// console.table(somme());







// exo 2 td4 mes tableaux 

// let array = [6,4]

// function result(array) {
//   let somme =0
//   let produit =1
//   let moy=0

//   for (let i= 0; i < array.length; i++) {
//     somme += array[i]
//      produit *= array[i]

//   }
//   moy = somme / array.length
//   return [somme,produit,moy]
// }
// console.table(result(array));






// exo 3 td4 les tableau
// Écrire un algorithme permettant de calculer le nombre de fois pour lesquelles un élément
// apparaît dans un tableau


// function ocurence (array){

//   let array = [1,8,6,4,8,9,2,2,8]
//   let nmb =0
//   let max=0


//   for (let i =0; i < array.length(); i++) {

//   }
//   if (array(i)= max)
//     nmb ++

//   return nmb
// }

// console.log(ocurence(2));



//         let array = [1,2,2,2,3,5,6,2]

//  function occurence(elem,array)
//     {

//         let nbre = 0;

//         for(let i = 0; i < array.length; i++){
//             if(elem == array[i]){
//                 nbre++;
//             }
//         }
//         return nbre;
//     }
//     console.log(occurence(2,array));






// let test = [1,2,3]
// test [3]=4  // insere 4 a lindex 3 dans le tableau test




// exo 4 td 4 les tableaux

// Écrire un algorithme permettant d’insérer un élément dans un tableau (au début, au milieu
// ou à la fin)




// exo 5 td4 les tableaux 

// Écrire un algorithme permettant de supprimer un élément dans un tableau




// let array= [1,2,3,4,5,6]


// function supp(array,elem){
// let result =[]
//   for (let i = 0; i < array.length; i++) {
//        if(array[i] != elem){
//         result.push(array[i])
//        }

//   }
// return result
// }
// console.log(supp(array, 4));




// console.log(array);





// ex 6 rd4 les tableaux 


// ecrire un algorithme permettant de trier par ordre croissant les éléments d’un tableau.


// function triabulle(array) {
//     let place = array.length;
    
//     for (let i = 0; i < place - 1; i++) {
//         for (let j = 0; j < place - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
              
//                 let res = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = res;
//             }
//         }
//     }
//     return array;
// }

// let array = [1, 5, 25, 3, 84, 21];
// let arrayplace = triabulle(array);
// console.log(arrayplace);





// exo7 td 4 les tableaux
// Écrivez un algorithme constituant un tableau, à partir de deux tableaux de même longueur
// préalablement saisis. Le nouveau tableau sera la somme des éléments des deux tableaux de
// départ.


// function sommeTableaux(array1, array2) {

//     let arraySomme = [];
  
//     for (let i = 0; i < array1.length; i++) {
    
//         arraySomme[i] = array1[i] + array2[i];
//     }
//     return arraySomme;
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let resultat = sommeTableaux(array1, array2);
// console.table(resultat); 







// function sumArray(array, arraytwo) {
//   let resArray = []
//   for (let i = 0; i < array.length; i++) {
//     resArray.push( array[i] +arraytwo[i])
    
//   }
//   return resArray
// }
// console.log(sumArray([1,2,3],[1,2,3]));






// exo8

// function schtroumpf(arrayone,arraytwo) {
//   letnres = 0
//   for (let i = 0; i < arrayone.length; i++) {
//     for (let j = 0; j < arraytwo.length; j++) {
//       res += arrayone[i]* arrayone[i]
      
//     }
//     return res
//   }
  
// }console.log(schtroumpf([2,4,5],[3,1]));