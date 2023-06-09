let size = 12;
let char = "A";
let tableRandom = [];
let tableVille ;

for (i = 0; i < size; i++) {
    tableRandom[i] = Math.floor(Math.random() * size+1);
}

for (i = 0; i < size; i++) {
    tableVille="";
    for (j = size; j >= 0; j--) {
        if(i<tableRandom[j]){
            tableVille+= " "
        }
        if(i>=tableRandom[j] && i>2){
            tableVille+= "╦"
        }
    }
    console.log(tableVille)
}