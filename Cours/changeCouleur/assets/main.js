const btn = document.querySelector(".btn");
const myContainer = document.querySelector(".container");
const inputRange = document.querySelectorAll(".inputRange");
const inputRangeTxt = document.querySelectorAll(".inputRangeTxt");
// const inputRangeJustifyContent = document.querySelector(".inputRangeJustifyContent").value;
// const inputRangeAlignItems = document.querySelector(".inputRangeAlignItems").value;
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector(".form");
// divide by 2.5
let rgb = {
    red : 0,
    green : 0,
    blue : 0,
    opacity : 1
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

// DECLARATION DES 3 ARRAY
let matricePosition=[];
let newMatrice=[];
let shuffledArray=[];

// INIT 3 DIMENSIONS ARRAY
for(i=0;i<=9;i++){
    matricePosition[i] = []
    for(j=0;j<=9;j++){
        matricePosition[i][j] = []
        matricePosition[i][j].push(i)
        matricePosition[i][j].push(j)
    }
}

// PUT ALL THE 3 DIMENSIONS ARRAY INTO 1 AND SHUFFLE IT
shuffle(matricePosition);

function shuffle(array) {
    for(i=0;i<array.length;i++){
        newMatrice.push(...array[i]);
    }
    return shuffledArray = newMatrice.sort((a, b) => 0.5 - Math.random());
}


const disableButton = () => {
    btn.disabled = true;
    damier()
};

form.addEventListener("submit", disableButton);


function damier(){
    const allNewDiv = document.querySelectorAll(".new-div");
    if(allNewDiv.length){
        allNewDiv.forEach(element => {
            element.remove();
        });
        return
    }
    for(i=0;i<shuffledArray.length;i++){
        (function(shuffledArray, i) {
            setTimeout(function() { 
                const newDiv = document.createElement("div");
                newDiv.classList.add("new-div");
                newDiv.style.position = "absolute";
                newDiv.style.top = `${shuffledArray[i][0]*10}vh`;
                newDiv.style.left = `${shuffledArray[i][1]*10}vw`;
                newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
                mainContainer.appendChild(newDiv)
                }, i * 100);
        })(shuffledArray,i); 
    }
}

// function damier(){
//     for(i=0;i<=9;i++){
//         for(j=0;j<=9;j++){
//             let positionX = i*10;
//             let positionY = j*10;
//             const newDiv = document.createElement("div");
//             newDiv.classList.add("new-div");
//             newDiv.style.position = "absolute";
//             newDiv.style.top = `${positionX}vh`;
//             newDiv.style.left = `${positionY}vw`;
//             newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
//             mainContainer.appendChild(newDiv);
//         }
//     }
// }
// inputRange.forEach(ele =>{
//     ele.addEventListener("input", MyRange)
// })
// function MyRange(){
//     // rgb.red = inputRange[0].value;
//     // rgb.green = inputRange[1].value;
//     // rgb.blue = inputRange[2].value;
//     // rgb.opacity = (inputRange[3].value/100);
//     // TO REPLACE
//     rgb.opacity = (inputRange[0].value/100);
//     let justify = "";
//     myContainer.style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${rgb.opacity})`;
//     inputRangeTxt.forEach(ele =>{
//         if(rgb.red >125 || rgb.green >125 || rgb.blue >125 || rgb.opacity <0.4){
//         ele.style.color = `rgb(0,0,0)`;
//         } else{
//             ele.style.color = `rgb(255,255,255)`;
//         }
//     })
//     // if(inputRangeJustifyContent = 0){
//     //     justify = "start";
//     // } else if(inputRangeJustifyContent = 1){
//     //     justify = "center";
//     // } else {
//     //     justify = "end";
//     // }
//     // myContainer.style.justifyContent = justify
// }