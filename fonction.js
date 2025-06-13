const prompt = require('prompt-sync')()

// exemple 1

// function saluer(quelquun) {
//     return "Salut" + quelquun
// }

// const message = saluer

// console.log(message);



// exemple 2


// function sum(a ,b) {
//     return a + b

// }

// const test = sum(4,4)



// console.log(result);




// td3 exo 1

// function Bonjour(name) {
//     return  "Bonjour " +  name


// }

// const message = Bonjour  ("Alice")

// console.log(message);







// td3 exo2

// function estAdulte(age) {

//     return age >= 18
// }

// let test = parseFloat( prompt("entre age"))

// console.log(estAdulte(test));






// td3 exo 3

// function inver(word) {
//     let res = ""

//     for (let i = word.length - 1; i >= 0; i--) {


//         res += word[i]

//     }
//    return res
// }


// let str = prompt('entre un mot')
// console.log(inver(str));




// HYPER IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// td3 exo4

// function getRandom(min, max) {

//     return Math.round( Math.random() * (max - min) + min);


// }
// console.log(getRandom(1,100));



// HYPER IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!








// exo1 feuille discord 

// function countLetter (word) {
//     return word.length
//  }
// console.log(countLetter("bonjour"));








// exemple pyra 


// function pyra (etage, char){
//     let res = ""
//     for (let i = 0; i < etage; i++) {
//         res+=char
//         console.log(res);


//     }
// }
// pyra (10, "i")







// exo 2 feuille discord


// function repeatword(word, numb) {
//     let res = ""
//     for (let i = 0; i < numb; i++) {
//         res += word



//     }
//     return res
// }
// console.log(repeatword("Hello", 3));










// exo 3 feuille discord

// function reverseString(word) {
//     let res = ""

//     for (let i = str.length - 1; i >= 0; i--) {


//         res += str[i]

//     }
//    return res
// }


// let str = prompt('entre un mot')
// console.log(reverseString(str));








// exo 4 feuille discord

// function calculIMC(kg, m) {

//     return( kg / (m*m)).toFixed(2);

// }
// console.log(calculIMC(71,1.70));






// exo 5 feuille discord

// function genererPseudo(surname, name, years){
//     return (genererPseudo = surname +name +years)
// }
// const pseudo = genererPseudo("DABROWSKI", "Clara" ,"1997")

// console.log(pseudo);






// exo 6 feuille discord



// function saluerPersonne(name, hour) {



//     if (hour < 12) {
//         console.log("Bonjour " + name + ", bonne matinée !");


//     } else if (hour > 12 &&  hour < 20 ) {

//         console.log("Bonjour " + name + ", bon après-midi !");

//     } else 
//     console.log("Bonsoir " + name + ", bonne soirée !");

// }

// console.log(saluerPersonne("Clara", 13));




// exo7 page feuille discord





// function compterVoyelles(word) {

// let res = ""
   

//     for (let i = 0; i < word.length; i++) {

//         res = res + word
        
//     }

// } if (word == 'a' || word == 'e' || word == 'i' || word == 'o' || word == 'u') {
//     console.log("voyelles");

// } else {
//     console.log("consonne");

// }

// compterVoyelles("Bonjour")


// correction voyellle

// function countVoyel(word){
//     let res=0
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i]

//         if (letter =="a"|| letter == "e"|| letter == "i"|| letter == "o"|| letter== "u"|| letter  == "y"  )    
        
//             res ++
//     }
//     return res
// }
// console.log(countVoyel("bonjour"));
















// function countLetter (word) {
//     return word.length
//  }
// console.log(countLetter("bonjour"));









// function reverseString(word) {
//     let res = ""

//     for (let i = str.length - 1; i >= 0; i--) {


//         res += str[i]

//     }
//    return res
// }


// let str = prompt('entre un mot')
// console.log(reverseString(str));

