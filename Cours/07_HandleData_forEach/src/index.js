import games from "./games.json" assert { type: 'json' };

init()

function init() {
}

// a. Logger le premier element du tableau games
console.log(games[0])
// b. Logger l'annee du 3eme element du tableau games
console.log(games[2].year)
// c. Logger le titre du dernier element du tableau
console.log(games[games.length - 1].title)

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)
const getGamesTitle = (array) => {
    let arrayGamesTitle = [];
    array.forEach(el => arrayGamesTitle.push(el.title));
    return arrayGamesTitle;
}
console.log(getGamesTitle(games));

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee
const getGamesByYear = (array, year) => {
    let arrayGamesByYear = [];
    arrayGamesByYear = array.filter(function(array){return array.year === year})
    // WITHOUT FILTER
    // array.forEach(el => el.year === year && arrayGamesByYear.push(el.title));
    return arrayGamesByYear;
}
console.log(getGamesByYear(games, 2020));


// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8
const getGameIfHighRating = (array, rating) => {
    let arrayGamesByRating = [];
    arrayGamesByRating = array.filter(function(array) {return array.rate >= rating;});
    // WITHOUT FILTER
    // array.forEach(el => el.rate >= rating && arrayGamesByRating.push(el.title));
    return arrayGamesByRating;
}
console.log(getGameIfHighRating(games, 8));

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console
const getAvailableGamesOnPlatform = (array, chosenDevice) => {
    let arrayAvailableGamesOnPlatform = [];
    arrayAvailableGamesOnPlatform = array.filter(function(array){return array.devices.includes(chosenDevice)});
    // WITHOUT FILTER
    // array.forEach(el => el.devices.includes(chosenDevice) && arrayAvailableGamesOnPlatform.push(el));
    return arrayAvailableGamesOnPlatform;
}
console.log(getAvailableGamesOnPlatform(games, "PC"));