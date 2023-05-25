// RANDOM YELLOW DICE
let diceJauneUn = Math.floor(Math.random() * 3) + 1;
let diceJauneDeux = Math.floor(Math.random() * 3) + 1;
let choixDiceJaune;
// CHECK IF YELLOW DICE EQUAL OR NOT
if (diceJauneUn === diceJauneDeux) {
    choixDiceJaune = diceJauneUn;
} else {
    choixDiceJaune = 6 - diceJauneDeux - diceJauneUn;
}
console.log("choixDiceJaune:", choixDiceJaune);
// ANIMAUX
let tabAnimal = [[0, "Gnou"],[1, "Antilope"],[2, "Rhinocéros"]];
let listAnimaux = [];
for (let i = 0; i < 5; i++) {
    listAnimaux[i] = tabAnimal[Math.floor(Math.random() * 3)][0];
}
console.log("listAnimaux:", listAnimaux);
// RED DICE
let listBraconier = [];
for (let i = 0; i < 2; i++) {
    listBraconier[i] = tabAnimal[Math.floor(Math.random() * 3)][0];
}
let animalKill;
// GREEN DICE
let garde = tabAnimal[Math.floor(Math.random() * 3)][0];
// OCCURRENCE
let occ = {};
// CHECK OCCURRENCES OF SAME ANIMALS
for (let n of listAnimaux) {
    occ[n] = occ[n] ? occ[n] + 1 : 1;
}
console.log("occ:", occ);
let winner = "pas de gagnant";
// CHECK IF BRACONIER EQUAL OR WHAT'S LEFT && NO COUNTER FROM GARDE
if ((listBraconier[0] === listBraconier[1]) && (listBraconier[0] != garde)) {
    animalKill = listBraconier[0];
    occ[animalKill] = occ[animalKill] - 1;
} else if ((animalKill = 3 - listBraconier[0] - listBraconier[1]) != garde) {
    occ[animalKill] = occ[animalKill] - 1;
}
console.log("occ après la suppression:", occ);
console.log("animalKill:", animalKill)
console.log("garde:", garde)
if (choixDiceJaune === occ[0] && choixDiceJaune === occ[1]) {
    winner = tabAnimal[2][1];
} else if (choixDiceJaune === occ[0] && choixDiceJaune === occ[2]) {
    winner = tabAnimal[1][1];
} else if (choixDiceJaune === occ[1] && choixDiceJaune === occ[2]) {
    winner = tabAnimal[0][1];
} else if (choixDiceJaune === occ[0]) {
    winner = tabAnimal[0][1];
} else if (choixDiceJaune === occ[1]) {
    winner = tabAnimal[1][1];
} else if (choixDiceJaune === occ[2]) {
    winner = tabAnimal[2][1];
}
console.log("winner:", winner);