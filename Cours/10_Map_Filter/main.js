import movies from "./movies.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies
// console.log(movies[0])
// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3])
// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length-1].title)
// d. Logger le titre du film qui a la meilleure note
let highestNote = movies[0];
movies.forEach(element => {
    if(element.rate > highestNote.rate) highestNote = element});
// console.log(highestNote.title)

// Alternatif .sort()
let highestNote2 = movies.sort((a,b)=>{return (a.rate - b.rate)*-1})
// console.log(highestNote2[0].title)

// e. Logger le titre du film le plus ancien
let oldestMovie = movies[0];
movies.forEach(element => {
    if(element.year < oldestMovie.year) oldestMovie = element});
// console.log(oldestMovie.title)

// Alternatif .sort()
let oldestMovie2 = movies.sort((a,b)=>{return (a.year - b.year)+1})
// console.log(oldestMovie2[0].title)

// f. Logger tous les titres de film qui ont au moins 3 acteurs
let filmMoreActorsThan2 = [];
movies.forEach(element => {
    if(element.actors.length>2) filmMoreActorsThan2.push(element.title)   
});
// console.log(filmMoreActorsThan2)

// Alternatif .sort() && .map()
// let filmMoreActorsThan22 = movies.filter((e) => e.actors.length>2)
// console.log(filmMoreActorsThan22.map((o)=> o.title))

// Alternatif .reduce()
let filmMoreActorsThan22 = movies.reduce((element, ele) => {
    if (ele.actors.length > 2) element.push(ele.title); 
    return element}, []);
// console.log(filmMoreActorsThan22)

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
// console.log(getAllTitles(movies))
function getAllTitles(array){
    let arrayAllTitles= [];
    array.forEach(element => {
        arrayAllTitles.push(element.title)});
    return arrayAllTitles
}

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
console.log(`Get movies by year (newbie) :`)
console.log(getMoviesByYear(movies,1994))
function getMoviesByYear(array,year){
    let arrayMovieByYear = [];
    array.forEach(element => {
        if(element.year === year) arrayMovieByYear.push(element.title)});
    return arrayMovieByYear
}
console.log(`Get movies by year (filter + map Methode) :`)
console.log(getMoviesByYearFilterMap(movies,1994))
function getMoviesByYearFilterMap(array,year){
    let arrayMovieByYear = array.filter(f => f.year === year)
    return arrayMovieByYear.map(m => m.title)
}
console.log(`Get movies by year (reduce Methode (VERSION OTPIMISED WITH EXT ARRAY)) :`)
console.log(getMoviesByYearReduce(movies,1994))
function getMoviesByYearReduce(array, year){
    let arrayMovieByYear = [];
    array.reduce((obj,o) => (o.year === year) && arrayMovieByYear.push(o.title))
    return arrayMovieByYear
}

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
console.log(`Get movies by director (newbie) :`)
console.log(getMoviesByDirector(movies,"Christopher Nolan"))
function getMoviesByDirector(array, director){
    let arrayMovieByDirector = [];
    array.forEach(element => {
        if(element.director === director) arrayMovieByDirector.push(element.title)});
    return arrayMovieByDirector
}
console.log(`Get movies by director (filter + map Methode) :`)
console.log(getMoviesByDirectorFilterMap(movies,"Christopher Nolan"));
function getMoviesByDirectorFilterMap(array,director){
    
    let arrayMovieByDirector = array.filter(f => f.director.includes(director))
    return arrayMovieByDirector.map(m => m.title)
}
console.log(`Get movies by director (reduce Methode) :`)
console.log(getMoviesByDirectorReduce(movies,"Christopher Nolan"))
function getMoviesByDirectorReduce(array,director){
    let arrayMovieByDirector = array.reduce((obj, o)=>{
        if(o.director == director) obj.push(o.title)
        return obj}, [])
    return arrayMovieByDirector
}

const arr = ['hello -- english', 'salut -- français', 'bye -- english', 'au revoir -- français', 'guten tag -- allemand']