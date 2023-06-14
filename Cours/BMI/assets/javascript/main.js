// const mainBtns = document.querySelectorAll(".main-btn");
// const mainContainer = document.querySelector(".main-container");
// const inputColor = document.querySelectorAll(".input-color");
// const submitBtn = document.querySelector(".submit-btn");
// const spanTxt = document.querySelector(".spanTxt");
// // #222354 #212831 #542243


// let nbClick = 1

// let arrayColors = [];

// let objectInputs = {
//     red : "",
//     green : "",
//     blue : ""
// }

// let advancedColorObject = {
//     red : "100",
//     green : "100",
//     blue : "100"
// }

// mainBtns.forEach(ele => {
//     ele.addEventListener("click", onClick);
// });
// submitBtn.addEventListener("click", onClickSubmit);

// function onClick(event){
//     advancedColorObject[event.target.getAttribute("data-color")] = Math.floor(Math.random()*255);
//     console.log(advancedColorObject);
//     mainContainer.style.backgroundColor = `rgb(${advancedColorObject["red"]},${advancedColorObject["green"]},${advancedColorObject["blue"]})`; 
// }

// function onClickSubmit(){
//     inputColor.forEach(ele => {
//         objectInputs[ele.getAttribute("data-color")] = ele.value;
//     })
//     mainContainer.style.backgroundColor = `rgb(${objectInputs["red"]},${objectInputs["green"]},${objectInputs["blue"]})`;
//     spanTxt.textContent = `${objectInputs["red"]},${objectInputs["green"]},${objectInputs["blue"]}`
// }

const inputIMC = document.querySelectorAll(".inputIMC");
const submitIMC = document.querySelector(".submitIMC");
const resultIMC = document.querySelector(".resultIMC");
const enAttenteIMC = document.querySelector(".enAttenteIMC");

let infoPersonne = {
    taille : 0,
    poids : 0,
    imc : 0
}

const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 }
  ];

submitIMC.addEventListener("click", resultContent)

function getBMI(){
    inputIMC.forEach(ele =>{
        infoPersonne[ele.getAttribute("data-personne")] = ele.value;
    })

    if(infoPersonne["poids"] < 40 || infoPersonne["taille"] < 100){
        handleError();
    } else{
        infoPersonne["imc"] = (infoPersonne["poids"] / ((infoPersonne["taille"]/100) **2)).toFixed(2);
    }
}

function resultContent(){
    getBMI();
    resultIMC.textContent = infoPersonne["imc"];
    for(i=0;i<BMIData.length;i++){
        if(infoPersonne["imc"] > BMIData[i].range[0] && infoPersonne["imc"] <= BMIData[i].range[1]){
            resultIMC.style.color = BMIData[i].color;
            enAttenteIMC.textContent = BMIData[i].name;

        } else if(infoPersonne["imc"] > BMIData[i].range){
            resultIMC.style.color = BMIData[i].color;
            enAttenteIMC.textContent = BMIData[i].name;
        }
    }
}

function handleError(){
    resultIMC.textContent = 0;
    enAttenteIMC.textContent = `Les valeurs entrées ne sont pas valides`;
    resultIMC.style.color = "red";
}
