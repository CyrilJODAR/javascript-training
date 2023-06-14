const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 }
];


const inputIMC = document.querySelectorAll(".inputIMC");
const submitIMC = document.querySelector(".submitIMC");
const resultIMC = document.querySelector(".resultIMC");
const enAttenteIMC = document.querySelector(".enAttenteIMC");

submitIMC.addEventListener("click", getBMI)


function getBMI() {

    const height = inputIMC[0];
    const weight = inputIMC[1];
    console.log()
    if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
        handleError()
        return
    }
    const bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(1)
    resultContent(bmi)
}

function resultContent(value) {
    let rank;
    for (let i = 0; i < BMIData.length; i++) {
        const data = BMIData[i];
        if (value > data.range[0] && value <= data.range[1]) {
            rank = data
            break
        } else if (data.range >= 40) {
            rank = data;
        }
    }
    resultIMC.textContent = value;
    resultIMC.style.color = rank.color;
    enAttenteIMC.textContent = rank.name;
}

function handleError() {
    resultIMC.textContent = "Erreur"
    resultIMC.style.color = "crimson"
    enAttenteIMC.textContent = "Remplis bien le formulaire bouffon"
}