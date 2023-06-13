let textMainContainer = document.querySelector(".container-h2First");
let textMainContainer2 = document.querySelector(".container-h2Second");
let textMainContainer3 = document.querySelector(".container-h2Third");
const forEachClassesChange = document.querySelectorAll('.foreachClasses');
const forEachClassesChangeText = document.querySelector(".textContent");
function functionChangeColorBleu(){
    for(n of forEachClassesChange){n.classList.replace("rouge", "bleu")};
    forEachClassesChangeText.textContent = `bleu`;
    forEachClassesChangeText.classList.replace("rouge", "bleu")
}
function functionChangeColorRouge(){
    for(n of forEachClassesChange){n.classList.replace("bleu", "rouge")}
    forEachClassesChangeText.textContent = `rouge`;
    forEachClassesChangeText.classList.replace("bleu", "rouge")
}
// const firstPart = `Cyril`;
// const secondPart = `"C.J" Jodar`;
// const age = 25;
// const bortherAge = 27;

const firstNameArray = [`Jimmya`,`Cyrileu`,`Damso`]
const tabVille =[
    id1 = {
        firstName : `Cyril`,
        lastName : `Jodar`,
        age : 25,
        size : 1.70,
        weight :70,
        town : {
            name: `Mérignac`,
            population: 40000,
            superficie: 50
        }
    },
    id2 = {
        firstName : `Jimmy`,
        lastName : `Carlier`,
        age : 28,
        size : 1.71,
        weight :84,
        town : {
            name: `Villenave d'Ornon`,
            population: 100000,
            superficie: 60
        }
    },
    id3 = {
        firstName : `Damien`,
        lastName : `Fasquelle`,
        age : 25,
        size : 1.78,
        weight :93,
        town : {
            name: `Pessac`,
            population: 42000,
            superficie: 55
        }
    }
];

let resultObject;
let resultObject2;
let resultObject3;
// BGGEST POPULATION
let biggestNumber = tabVille[0].town.population;
let biggestCity =tabVille[0];
for(i=0;i<tabVille.length;i++){
    if(tabVille[i].town.population > biggestNumber ){
        biggestNumber = tabVille[i].town.population;
        biggestCity = tabVille[i];
    }
}
// VALUES SENT
resultObject = `M. ${biggestCity.lastName} habite dans la plus grande ville qui est ${biggestCity.town.name} avec ${biggestCity.town.population}`;
textMainContainer.textContent = resultObject;
// 
// PERSON BIGGEST IMC
// 
let calculImc = tabVille[0].weight / (tabVille[0].size **2);
let biggestImc = tabVille[0];
for(i=0;i<tabVille.length;i++){
    if(calculImcFor(tabVille[i])> calculImc){
        calculImc = calculImcFor(tabVille[i]);
        biggestImc = tabVille[i];
    }
}
// VALUES SENT
resultObject2 = `c'est ${biggestImc.firstName} qui a l'IMC la plus élevée : ${biggestImc.imc}`;
textMainContainer2.textContent += resultObject2;
// FUNCTION IMC
function calculImcFor(data){
    const imc = tabVille[i].weight / (tabVille[i].size **2)
    tabVille[i].imc = imc;
    return imc;
}
// 
// BIGGEST POPULATION DENSITY
// 
let calculDensity = tabVille[0].town.population / tabVille[0].town.superficie;
let biggestSuperficie = tabVille[0];
for(i=0;i<tabVille.length;i++){
    if(calcDensity(tabVille[i])> calculDensity){
        calculDensity = calcDensity(tabVille[i]);
        biggestSuperficie = tabVille[i];
    }
}
// VALUES SENT
resultObject3 = `la ville de ${biggestSuperficie.town.name} a une densité de ${biggestSuperficie.town.density} pers/km2`
textMainContainer3.textContent += resultObject3;
// FUNCTION DENSITY
function calcDensity(data){
    const density = tabVille[i].town.population / tabVille[i].town.superficie;
    tabVille[i].town.density = density
    return density;
}


// const id1 = {
//     firstName : `Cyril`,
//     lastName : `Jodar`,
//     age : 25,
//     size : 170,
//     town : {
//         name: `Mérignac`,
//         population: 45000
//     }
// };
// const id2 = {
//     firstName : `Jimmy`,
//     lastName : `Carlier`,
//     age : 28,
//     size : 171,
//     town : {
//         name: `Villenave d'Ornon`,
//         population: 40000
//     }
// };
// const id3 = {
//     firstName : `Damien`,
//     lastName : `Fasquelle`,
//     age : 25,
//     size : 178,
//     town : {
//         name: `Pessac`,
//         population: 42000
//     }
// };

// let resultObject = `Bonjour, je m'appelle ${id1.firstName} ${id1.lastName}, j'ai ${id1.age} ans et j'habite à ${id1.town}`

// let resultObject2 = `l'autre bouffon à ma droite s'appelle ${id2.firstName} ${id2.lastName}, il a ${id2.age} ans et habite à ${id2.town}`

// let plusAge;
// let moinsAge;
// if(id1.age > id2.age){
//     plusAge  = id1;
//     moinsAge = id2;
// } else{
//     plusAge  = id2;
//     moinsAge = id1;
// }
// let taller;
// let smaller;
// if(id1.size>id2.size){
//     taller = id1;
//     smaller = id2;
// } else{
//     taller = id2;
//     smaller = id1;
// }

// let biggerTown;
// let smallerTown;
// if(id1.town.population>id2.town.population){
//     biggerTown = id1;
//     smallerTown = id2;
// } else{
//     biggerTown = id2;
//     smallerTown = id1;
// }

// Gros affichage
// let resultObject3 = `Le plus agé est ${plusAge.firstName}, il a ${plusAge.age%moinsAge.age} ans de plus que ${moinsAge.firstName}. Concernant la taille, ${taller.firstName} est plus grand de ${taller.size - smaller.size} cm comparé à ${smaller.firstName}. Celui qui habite dans la ville la plus peuplé est ${biggerTown.firstName} avec ${biggerTown.town.population}(${biggerTown.town.name}) habitant. Alors que la ville de Jimmy (${smallerTown.town.name}) possède ${smallerTown.town.population} habitant`;




// textMainContainer.textContent += resultObject
// textMainContainer2.textContent += resultObject2
// textMainContainer3.textContent += resultObject3
// firstNameArray[firstNameArray.length-1] | firstNameArray.pop();

// const result = `Ia ora na, je m'appelle ${firstNameArray.pop()} ${secondPart}, j'ai ${age} ans. `;
// let result1;
// let result2;
// result += firstPart + ` ` + secondPart
// textMainContainer.textContent = result;

// Age pair frère

// if(bortherAge%2===0){
//     result1 = `L'age de mon frère est pair, il a ${bortherAge} ans. `;
// } else {
//     result1 = `L'age de mon frère est impair il a ${bortherAge} ans. `;
// }
// textMainContainer.textContent += result1;


// Trois conditions
// if(bortherAge === age){
//     result2 = `Mon frère a le même age que moi : ${bortherAge} ans`;
// } else if(bortherAge > age){
//     result2 = `Il est plus agé de ${bortherAge-age} ans.`;
// } else{
//     result2 = `Il est moins agé de ${age-bortherAge} ans.`;
// }
// textMainContainer.textContent += result2;

// Deux conditions
// if(bortherAge >= age){
//     result1 = `Mon frère est plus agé de ${bortherAge%age} ans`
// } else{
//     result1 = `Mon frère est moins agé de ${age-bortherAge} ans`
// }
