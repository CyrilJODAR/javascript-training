// ANIMAUX
let tabAnimal = [[0, "Gnou"],[1, "Antilope"],[2, "Rhinocéros"]];
let listAnimaux = [];
for (let i = 0; i < 5; i++) {
    listAnimaux[i] = tabAnimal[Math.floor(Math.random() * 3)][1];
}

let tabOcc= [];

for(i=0;i<3;i++){
    tabOcc[i]=[];
    for(j=0;j<listAnimaux.length;j++){
        if(listAnimaux[j] === tabAnimal[i][1]){
            tabOcc[i].push(listAnimaux[j])
        }
    }
}
console.log(tabOcc)
