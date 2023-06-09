let size = 20;
let carre;

// for(i=0;i<size;i++){
//     carre = ""
//     for(j=0;j<size;j++){
//         if(i === 0 || i === size -1 || j === 0 || j === size -1){
//             carre += "X"
//         } else if ((i === 2 || i === size -3 || j === 2 || j === size -3) && (j != size -2 && i != size -2 && j!= 1 && i != 1) ){
//             carre += "X"
//         } else {
//             carre += " "
//         }
//     }
//     console.log(carre)
// }
let decrementSize = 3
let decrementSize2 = 2
for(i=0;i<size;i++){
    carre = ""
    for(j=0;j<size;j++){
        if(i === 0 || i === size -1 || j === 0 || j === size -1){
            carre += "X"
        } else if ((i%2 === 0 || i === size - decrementSize || j%2 === 0 || j === size - 2) && (j != size - 2 && i != size -2 && j!= 1 && i != 1) ){
            carre += "X"
        } else {
            carre += " "
        }
    }
    decrementSize = decrementSize +2;
    // decrementSize2 = decrementSize2 +2;
    console.log(carre)
}

// Si I est égale à 1 puis +2 à chaque fois alors " " sinon X pareil pour J