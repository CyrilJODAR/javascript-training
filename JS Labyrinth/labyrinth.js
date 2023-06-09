let labySize = 10;
let emptyPath = " ";
let labyWalls = "X";
let labyrinth = [];
let labyStart = "E"
let labyEnd = "S"
let scarcity = labySize / 2;
let randomMove;

tabMove = [];
let right = 8 - 1;
let down = 9 - 0;

for (i = 0; i < right; i++) {
    tabMove.push(0)
}
for (i = 0; i < down; i++) {
    tabMove.push(1)
}
console.table(tabMove)
// GENERATION LABYRINTH
for (i = 0; i < labySize; i++) {
    labyrinth[i] = [];
    for (j = 0; j < labySize; j++) {
        if ((i === 0 || j === 0 || j === labySize - 1 || i === labySize - 1)) {
            labyrinth[i][j] = labyWalls
            // TEMPORAIRE POUR UN START ET FINISH FICTIF
            if (i === 0 && j === 1) { labyrinth[i][j] = labyStart }
            if (i === 9 && j === 8) { labyrinth[i][j] = labyEnd }
        } else {
            if ((Math.floor(Math.random() * labySize)) <= scarcity) {
                labyrinth[i][j] = labyWalls
            } else {
                labyrinth[i][j] = emptyPath
            }
        }
    }
}
console.table(labyrinth);
// REMOVING THE PATH TO EXIT
for (i = 0; i < labySize; i++) {
    for (j = 0; j < labySize; j++) {
            // console.log(`indice I : ${i}    indice j : ${j}      tabMove.length : ${tabMove.length}`)
            randomMove = Math.floor(Math.random() * tabMove.length);
            if (randomMove === 1) { // Condition Mauvaise
                labyrinth[i][j] = " ";
                tabMove.splice(1, randomMove);
            } else if (randomMove === 0) {
                labyrinth[i][j] = " ";
                tabMove.splice(1, randomMove);
            }
    }
}

console.table(labyrinth);
//Math.floor(Math.random()* labySize-1) // Ajout plus tard d'un +1 la ou ce nombre pointera pour éviter la case 0 et la dernière du tableau

// POUR LE CHEMIN DE SORTIE ->>> ON PREND UN TABLEAU QUI REMOVE DES WALLS RANDOM 1 PAR 1 EN RESTANT ENTRE LA VALUE DU Start ET du Exit à base de gauche/droite/haut/bas comme si l'on voulait déplacer un joueur.
// EXEMPLE :

// UNE var qui stock si on place l'entrée et la sortie En [random][0] ou [0][random] ou [random][labSize -1] ou [labSize-1][random]. On les placent.
// EXEMPLE : Alors entrée = labyrinth[0][5] et sortie = labyrinth[8][labsize-1];

// ON fait donc if(randomIentrée > labyrinthIsortie){ left = randomIentrée - labyrinthIsortie
//                } else if (randomIentrée < labyrinthIsortie) { right = labyrinthIsortie - randomIentrée }
//                 Pareil pour J mais avec Up && Down

//      Cela nous donne le nombre de fois que l'on a le droit d'aller vers le Haut ou Vers le bas et Vers la droite ou Vers la gauche. Pour être SÛR de ne pas finir ailleurs
//      qu'a notre sorite
//
//      Ensuite nous faison un random qui va tourner le nombre de vois qu'il y a de possibilité de déplacement afin de choisir lequel choisir à chaque fois (pas exactement
//      mais flemme d'expliquer totalement) avec un switch case.

//      Si besoin d'aller vers des cotés opposé à la ou nous allons, on réduit de 1 la possibilité d'aller vers la droite mais +1 vers la gauche en possibilité tant que nous
//      somme dans la délimitation du labyrinth DONC si I = 0 peux pas aller plus bas et pareil pour J
//
//
//
//
//
//