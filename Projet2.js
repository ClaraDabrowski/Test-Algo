const prompt = require("prompt-sync")()


function quizz (){}

let score = 0

let question1 = {
    sentence: "Lequel des empires suivants n’avait pas de langue écrite ?",
    responses : ["1: Les Incas", "2 : Les Aztèques", "3 : Les Égyptiens "],
    goodAnswer: "1",
    comment : " Les Incas n'avaient pas de langue écrite"
    
}

let question2 = {
    sentence: "Quel pays possède le plus grand nombre d'îles dans le monde ?",
    responses : ["1 : Indonésie", "2 : Canada", "3 : Suède"],
    goodAnswer: "3",
    comment : " La Suède, elle possède plus de 220 000 îles."
}


let question3 = {
    sentence: "Quelle langue comprend la plus grand nombre de mots ?",
    responses : ["1 : L'espagnol", "2 : L'anglais", "3: Le japonais"],
    goodAnswer: "2",
    comment : " L'anglais, avec 200 000 mots (selon les entrées dans le dictionnaires)"
}


let question4 = {
    sentence: "En quelle année le premier numéro de Vogue a-t-il été publié ?",
    responses : ["1 : En 1892", "2 : En 1960", "3 : En 2000"],
    goodAnswer: "1",
    comment :" Le premier numéro à été publié en 1892"
}


let question5 = {
    sentence: "De quelle ville les Beatles sont-ils originaires ?",
    responses : ["1 : Londres", "2 : Liverpool", "3 : Leeds"],
    goodAnswer: "2",
    comment : " Les Beatles sont originaires de Liverpool"
}


let question6 = {
    sentence: "En quelle année Netflix a-t-il été créé ?",
    responses : ["1 : En 1997", "2 : En 2001", "3 : En 2009"],
    goodAnswer: "1",
    comment :"  C'est en 1997 que Netflix à été créé !"
}

let tabQuestions = [question1,question2,question3,question4,question5,question6]

// premiere etape, boucle sur tabQuestion

for (let i = 0; i < tabQuestions.length; i++) {
    console.log(tabQuestions[i].sentence);

    for (let j = 0; j < tabQuestions[i].responses.length; j++) {
        console.log(tabQuestions[i].responses[j]);
        
      
    }
    choice = prompt ("Fais ton choix :")
    if (choice == tabQuestions[i].goodAnswer) {
        score++
        
        console.log("Gagné ," + tabQuestions[i].comment);

        
    }else{
        console.log("Perdu, la bonne réponse était :" + tabQuestions[i].comment);
        
    }
      console.log("Votre score est de "+ score);
    
    
}