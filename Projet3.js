const prompt = require('prompt-sync')()

/* Fonctions à faire:
    - Afficher les attaques et le choix des attaques.
        -Parcourir liste attaque et afficher leurs noms
        -Retourner attaque choisi grâce au choix du player
    - Attaquer : doit avoir 3 var : attaque atk, la cible, et l'attaquant
                car pour atk choisir la cible
                mais pour soin choisir l'attaquant 
    

    - Fonction pour le lancer de dés!
    - Fonction si attaque touche ou pas!

    -Fonction random pour le pnj avec meme choix des attaques, seulement changer les cibles et attaquand etc
    -Fonction afficher stats


    -Fonction initgame




// function getRandom(min, max) {

//     return Math.round( Math.random() * (max - min) + min);


// }
// console.log(getRandom(1,100));

*/





// Stats des joueurs

let player = {
    name: "Guerrier du feu",
    pv: 100,
    atks: [
        {
            name: "Frappe Rapide",
            power: - 20,
            accuracy: 1
        },
        {
            name: "Soin Léger ",
            power: 15,
            accuracy: 2
        },
        {
            name: "Coup Puissant",
            power: - 20,
            accuracy: 2

        },
        {
            name: "Frappe Dévastatrice",
            power: -30,
            accuracy: 3
        }
    ]
}


let playertwo = {
    name: "Sombre Lutin",
    pv: 100,
    atks: [
        {
            name: "Mandale Banale",
            power: - 20,
            accuracy: 1
        },
        {
            name: "Second Souffle",
            power: 15,
            accuracy: 2
        },
        {
            name: "Coup de Coude",
            power: -20,
            accuracy: 2

        },
        {
            name: "Bouquet Final",
            power: -30,
            accuracy: 3
        }
    ]


}

console.log("Vous tombez sur votre ennemi de toujours Sombre Lutin, cette fois sera la bonne ! Lancer l'attaque !!!");

// Fonction choix attaque + afficher

function choiceAtk() {


    console.log("Vos attaques :");


    for (let i = 0; i < player.atks.length; i++) {
        console.log(i + 1 + "): " + player.atks[i].name);
    }
    let atk = parseFloat(prompt("Fais le choix de ton attaque : 1, 2, 3, où 4 ? :"))
    while (atk != "1" && atk != "2" && atk != "3" && atk != "4") {
        atk = prompt("Faites votre choix entre 1, 2, 3, où 4 : ")
    }
    return player.atks[atk - 1]
}


// Fonction attaquer

function lancerAtk(atk, cible, attaquant) {

    if (getRandom(0, atk.accuracy) == 0) {
        console.log(atk.name + ": L'attaque touche !");

        if (atk.power > 0) {
            attaquant.pv += atk.power
        } else {
            cible.pv += atk.power
        }

    } else {
        console.log(atk.name + ": L'attaque rate..");

    }

}

// Fonction afficher les Pv

function displayStat() {

    console.log(player.name + " = " + player.pv + "PV");
    console.log(playertwo.name + " = " + playertwo.pv + "PV");

}


// Fonction lancé de dés

function getRandom(min, max) {

    return Math.round(Math.random() * (max - min ) + min);
}



 
// let choice = choiceAtk()
// lancerAtk(choice, playertwo, player)

// let IndexCpu = getRandom(0, playertwo.atks.length - 1)

// let atkCpu = playertwo.atks[IndexCpu]

// lancerAtk(atkCpu, player, playertwo)




// Boucle tour a tour + random pour Cpu

while (player.pv > 0 && playertwo.pv > 0) {

    let choice = choiceAtk(player);

    lancerAtk(choice, playertwo, player);
    displayStat();

    if (playertwo.pv <= 0) break;


    let IndexCpu = getRandom(0, playertwo.atks.length - 1);
    let atkCpu = playertwo.atks[IndexCpu];

    lancerAtk(atkCpu, player, playertwo);
    displayStat();
}

console.log("Le combat est terminé");


 // Affichage du gagnant (initgame ???)

if (player.pv <= 0) {
    console.log("Le gagnant est " + playertwo.name);
} else {
    console.log("Le gagnant est " + player.name);
}































































