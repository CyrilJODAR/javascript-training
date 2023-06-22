const users = getUsers();
async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        bridgeFunction(data)
        if(!response.ok) {
            throw new Error(`Fetch data issue`)
        }
    } catch (error) {
        console.log(error);
    }
}
function bridgeFunction(d){
    getLastElemArray(d)
    getOldestUser(d)
    getNumberDisparity(d)
    getNewArrayFormat1(d)
    getNewArrayFormat2(d)
    getNewArrayFormat3(d)
    }
// a. afficher le dernier élément du tableau
function getLastElemArray(d){
    console.log(d.results[d.results.length-1])
}
// b. afficher l'age le plus élevé
function getOldestUser(d){
    let oldest = d.results.sort((a,b)=> (a.dob.age - b.dob.age)*-1)
    console.log(oldest[0])
}
// c. afficher le nombre d'homme et le nombre de femmes
function getNumberDisparity(d){
    let numberDisparityMale = 0;
    let numberDisparityFemale = 0;
    d.results.forEach(element => {
        element.gender === "male" ? numberDisparityMale++ : numberDisparityFemale++
    });
    console.log(`Males : ${numberDisparityMale}, Females : ${numberDisparityFemale}`)
}
// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}
function getNewArrayFormat1(d){
    const newArrayFormat = d.results.map(m=> {
        return {name :`${m.name.first} ${m.name.last}`, age : m.dob.age}
    })
    console.log(`Array with objects format : [{name : Daphne Durand, age: 61},]`)
    console.log(newArrayFormat)
}
// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}
function getNewArrayFormat2(d){
    const newArrayFormat = d.results.map(m=> { 
        return {name :`${m.name.first} ${m.name.last}`, ageInferiorThirty : m.dob.age < 30}
    })
    console.log(`Array with objects format : [{name : Daphne Durand, adult: true}]`)
    console.log(newArrayFormat)
}
// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}
function getNewArrayFormat3(d){
    const newArrayFormat = d.results.map(m=> {
        return {email : m.email, message : `Bonjour ${m.name.first}, votre adresse ${m.location.street.number} ${m.location.street.name}, ${m.location.postcode} ${m.location.state} est-elle correcte ?`}
    })
    console.log(`Array with objects format : [{mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}]`)
    console.log(newArrayFormat)
}