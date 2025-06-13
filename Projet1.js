const prompt = require("prompt-sync")()

let choicePlayer = ""

console.log("De retour de votre dernière aventure, sur le chemin qui vous mène à votre village,votre équipe et vous, vous égarez au détour d'un embranchement! Vous décidez de continuer pour voir où cela vous mènera! Derrière un arbre, vous tombez sur une entrée recouverte de ronce, visiblement celle d'un donjon ! Que souhaitez-vous faire")

choicePlayer = prompt("Vous decidez d'aller découvrir le donjon(a) ou vous préferez continuer votre chemin (b)?")
while (choicePlayer != "a" && choicePlayer != "b") {
    choicePlayer = prompt("Veuillez choisir entre a et b")
}

if (choicePlayer == "a") {
    console.log("Vous écartez les ronces et ouvrez la porte du donjon : ");
    console.log("Vous atterrissez dans une grande salle éclairée de bougies, deux tunnels partent de part et d'autre de la salle, que choisissez -vous? Partir dans le tunnel de   droite (c)?, partir dans le tunnel de gauche (d)?");
    choicePlayer = prompt("")
    while (choicePlayer != "c" && choicePlayer != "d") {
        choicePlayer = prompt("Veuillez choisir entre c et d")
    }
    if (choicePlayer == "c") {
        console.log("Vous partez dans le tunnel de droite, après un moment, vous atterrissez dans une pièce vide. Toiles d'araignée et poussière sont au rendez -vous, vous vous        apprêtez a revenir sur vos pas, quand vous apercevez un coffre dans le coin! ");
        choicePlayer = prompt("Vous trouvez cela étrange et decidez de continuer votre chemin ?(e) où vous foncez tête baissée ?(f)")
        while (choicePlayer != "e" && choicePlayer != "f") {
            choicePlayer = prompt("Veuillez choisir entre e et f")
        }
        if (choicePlayer == "e") {
            console.log("Vous allez pour faire demi-tour quand un de vos compagnons va discrètement pour l'ouvrir. Un mimique surgit et avale votre compagnon. Pris de terreur, vous partez en courant et fuyez le donjon - Fin de l'histoire");

        } else {
            console.log("C'etait un mimique ! Vous essayez de vous battre mais finissez avalé par le mimique. Vos compagnons prennent la fuite, vous périssez - Fin de l'histoire  -       Recommencez là pour une autre fin..");

        }

    } else {
        console.log("En entrant dans le tunnel de gauche, vous passez devant des tombeaux et des ossements qui jonchent le sol, avec vos yeux aguerris, vous apercevez une porte      derrière l'un des tombeaux ");
        choicePlayer = prompt("Vous continuez tout droit pour atteindre la porte centrale ? (g), vous prenez la petite trappe ? (h)")
        while (choicePlayer != "g" && choicePlayer != "h") {
            choicePlayer = prompt("Veuillez choisir entre g et h")
        }
        if (choicePlayer == "g") {
            console.log("Vous entrez dans une salle majestueuse! Ébahis, vous apercevez au fond de la pièce le trésor tant attendu, il est là à portée de main! Vous avancez d'un pas pour vous approchez de votre récompense, mais soudainement les portes se referment derrière vous. C'était un piège, des squelettes surgissent des murs, vous êtes     assailli et perdez le combat - Fin de l'histoire");


        } else {
            console.log("Vous vous faufilez dans la trappe, vous trébuchez sur une pierre et activez un bouton ! Les murs se rapprochent, vous n'avez plus aucun moyen de vous échappez,  votre aventure s'arrête ici .. - Fin de l'histoire ");

        }
    }

} else {
    console.log("Vous décidez de continuer votre chemin et rentrez paisiblement dans votre village, sans encombre - Fin de l'histoire");
}




