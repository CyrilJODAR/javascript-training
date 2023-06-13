// const num1=5;
// const num2=8;
// sum2args(num1,num2);

// function sum2args(arg1,arg2){
//     result = `La somme de ${arg1} avec ${arg2} est égale à ${arg1+arg2}`
//     console.log(result)
// }


addition(24,18);
soustra(resultAddi,22);
affichageResult(resultSoustra)

function addition(arg1,arg2){
    resultAddi = arg1+arg2;
    return resultAddi;
}

function soustra(resultAddi,arg){
    resultSoustra = resultAddi - arg;
    return resultSoustra;
}

function affichageResult(resultSoustra){
    console.log(`le résultat des deux précédentes fonctions sont ${resultSoustra}`)
}

const tab = [8, 5, 10, 15, 22, 18, 9, 12, 15, 12, 52];

totalSrangeNumbersTab(tab)

function totalSrangeNumbersTab(arg){
    let result = 0;
    for(i=0; i < arg.length; i++){
        if(i %3 != 0){
            result += arg[i];
        }
    }
    console.log(result)
}

// let helloMultilingual = ["Bonjour", "Hello", "Guten tag", "Konichiwa", "Anyong haseyo"]
// Return un tableau de tout les nombres supérieur à la moyenne de tout les nombres du tableau.

let tableauNombreMoyenne = [8, 5, 10, 15, 22, 18, 9, 12, 15, 12, 52];

finalResult = calculMoyenneTableau(tableauNombreMoyenne)


function calculMoyenneTableau(arg, resultat){
    resultatSuperieur = [];
    let moyenne = 0;
    for(i=0; i<arg.length; i++){
        moyenne += arg[i];
    }
    moyenne /= arg.length;

    arg.forEach(ele => {
        if(ele>moyenne){
            resultatSuperieur.push(ele);
        }
    });
    return [moyenne, resultatSuperieur]
}

console.log(`la moyenne des nombres du tableau est ${finalResult[0]}`);

console.log(`les nombres supérieur à la moyenne sont:  ${finalResult[1]}`);



// let arrayNumbers = [8, 5, 10, 15, 22, 18, 9, 12, 15, 12, 52];

// let higherThanAverageArray = getAverageOfNumbersInArray(arrayNumbers)
// let myAverage = calculAvg(arrayNumbers)

// function calculAvg(arg){
//     let average = 0;
//     for(i=0;i<arg.length;i++){
//         average += arg[i];
//     }
//     average /= arg.length;

//     return average
// }

// function getAverageOfNumbersInArray(baseArray, myAverage){
//     let arrayNumberhigherThanAverage = [];
//     console.log(baseArray)
//     baseArray.forEach(ele => {
//         if(ele > myAverage){
//             arrayNumberhigherThanAverage.push(ele)
//         }
//     });
//     return arrayNumberhigherThanAverage
// }

// console.log(`la moyenne des nombres du tableau est ${myAverage}`);

// // console.log(`les nombres supérieur à la moyenne sont:  ${higherThanAverageArray}`);
// console.log(higherThanAverageArray)



const cities = [
    {
        name: 'Paris',
        superficy: 104.5,
        population: 10858874
    },
    {
        name: 'Londres',
        superficy: 1572,
        population: 8908081
    },
    {
        name: 'Madrid',
        superficy: 608,
        population: 3280782
    },
    {
        name: 'Lisbonne',
        superficy: 100.05,
        population: 509515
    },
    {
        name: 'Rome',
        superficy: 2213,
        population: 2844395
    },
    {
        name: 'Berlin',
        superficy: 891.7,
        population: 3748148
    },
    {
        name: 'Moscou',
        superficy: 2542,
        population: 12655050
    },
    {
        name: 'Varsovie',
        superficy: 546,
        population: 1793579
    },
    {
        name: 'Copenhague',
        superficy: 292,
        population: 1345562
    },
    {
        name: 'Dublin',
        superficy: 318,
        population: 1173179
    }
]



const pizzas = [
    {name: 'Margherita', price: 11.50, ingredients: ['mozzarella', 'tomate', 'basilic', "huile d'olive"],  baseTomate: true},
    {name: 'Regina', price: 12, ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignon'], baseTomate: true},
    {name: '4 saisons', price: 15, ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'], baseTomate: true},
    {name: 'Napolitaine', price: 14, ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'], baseTomate: true},
    {name: '4 fromages', price: 16, ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'], baseTomate: true},
    {name: 'Montagnarde', price: 19, ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'], baseTomate: false},
    {name: 'Chèvre-miel', price: 18, ingredients: ['mozzarella', 'chèvre', 'miel'], baseTomate: false},
    {name: 'Hawaïenne', price: 17, ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'], baseTomate: true}
]

// FUNCTION RETURN ALL PIZZAS NAME
let myArrayOfPizzaName = getNameOfObjectInArray(pizzas);

function getNameOfObjectInArray(arrayPizza){
    let arrayPizzaName = [];

    arrayPizza.forEach(ele =>{
        arrayPizzaName.push(ele.name); 
    });
    return arrayPizzaName;
}

// FUNCTION RETURN AVERAGE PRICE OF ALL PIZZAS
let myAveragePizzaPrice = getAveragePizzaPrice(pizzas);

function getAveragePizzaPrice(arrayPizza){
    let averagePizzaPrice = 0;
    for(i=0;i<arrayPizza.length;i++){
        averagePizzaPrice += arrayPizza[i].price;
    }
    averagePizzaPrice /= arrayPizza.length;
    return averagePizzaPrice.toFixed(2);
}

// FUNCTION RETURN ALL INGREDIENTS OF A CHOSEN PIZZA BY ITS NAME
let myIngredientInPizza = getIngredientsByPizzaName("Napolitaine",pizzas);

function getIngredientsByPizzaName(chosenPizza,arrayPizza){
    let myIngredients = [];

    for(i=0;i<arrayPizza.length;i++){
        if(chosenPizza === arrayPizza[i].name){
            myIngredients.push(...arrayPizza[i].ingredients) 
            break;
        }
    }
    return myIngredients;
}

// FUNCTION RETURN ALL UNIQUE INGREDIENTS OPTIMISED VERSION
let myUniqueIngredientList = getAllUniqueIngredients(pizzas);

function  getAllUniqueIngredients(arrayPizza){
    let allIngredients = [];
    let unique = [];
    for(i=0;i<arrayPizza.length;i++){
        // allIngredients = allIngredients.concat(arrayPizza[i].ingredients);
        allIngredients.push(...arrayPizza[i].ingredients);

    }
    unique.push(...new Set(allIngredients));
    return unique
}

// FUNCTION RETURN ALL UNIQUE INGREDIENTS WITH SPREAD OPERATOR & SET

// function  getAllUniqueIngredients(arrayPizza){
//     let allIngredients = [];
//     let unique
//     for(i=0;i<arrayPizza.length;i++){
//         for(j=0;j<arrayPizza[i].ingredients.length;j++){
//             if(allIngredients.includes(arrayPizza[i].ingredients[j])) continue
//                 allIngredients.push(arrayPizza[i].ingredients[j]);
//         }
//     }
//     unique = [...new Set(allIngredients)];
// // spread operator with Set
//     return unique
//     // return allIngredients
// }

// FUNCTION RETURN ALL UNIQUE INGREDIENTS WITH IF INCLUDE -> continue


// function  getAllUniqueIngredients(arrayPizza){
//     let allIngredients = [];
//     for(i=0;i<arrayPizza.length;i++){
//         for(j=0;j<arrayPizza[i].ingredients.length;j++){
//             if(allIngredients.includes(arrayPizza[i].ingredients[j])) continue
//                 allIngredients.push(arrayPizza[i].ingredients[j]);
//         }
//     }
//     return allIngredients
// }

// GET PIZZAS WITH A CHOSEN INGREDIENT
let myPizzasByIngredient = getPizzasByIngredient('champignon',pizzas);

function getPizzasByIngredient(myIngredient,arrayPizza){
    let getPizzaIngredient = [];

    for(i=0;i<arrayPizza.length;i++){
        if(arrayPizza[i].ingredients.includes(myIngredient)){
            getPizzaIngredient.push(arrayPizza[i].name)
        }
    }
    return getPizzaIngredient;
}

console.log(`Tout les noms de pizzas :`);
console.log(myArrayOfPizzaName);
console.log(`Le prix moyen des pizzas :`);
console.log(myAveragePizzaPrice);
console.log(`Les ingrédients d'une pizza choisit :`);
console.log(myIngredientInPizza);
console.log(`Liste unique de tout les ingrédients d'une pizza :`);
console.log(myUniqueIngredientList);
console.log(`my liste of pizzas with a certain ingredient :`);
console.log(myPizzasByIngredient);
