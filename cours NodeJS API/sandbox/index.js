//SPREAD OPERATOR   

// pour les tableaux
// const arr1= [2,4,7];
// const arr2= [3,5,8];

// const newArr = ['arr 1 : ',...arr1, 'arr 2 : ', arr2];

// console.log(newArr);

const amir = {
    name : 'Amir',
    age : 36
}

const amirWithEmail = {
    ...amir,
    email : 'amir@gmail.com'
}

// console.log(amirWithEmail);

const newAmir = {
    ...amirWithEmail,
    age : 37
}

// console.log(newAmir);

//exercices

const arr1 = ["Bonjour","tout","le monde"]
const arr2 = ["Salut","à tous"]
const arr3 = ["je m'appelle","mon nom est",]
const arr4 = ["Paul","Doazan"]
const arr5 = ["Antoine","Dupont"]

const pres1 = [...arr1,arr3[0],...arr5]

const pres2 = [...arr2,arr3[1],...arr4]


// console.log(pres1.join(' '));
// console.log(pres2.join(' '));

// REST PARAMETER

function Sum(...params){
    return params.reduce((tempSum, elem) => tempSum + elem, 0);
}

console.log(Sum(5,8,9,6,5,4))