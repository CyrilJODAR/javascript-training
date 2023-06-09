let size = 12;
let char = "A";
let tableRandom = [];
let blank;
let tableVille ;

for (i = 0; i < size; i++) {
    tableRandom[i] = Math.floor(Math.random() * size+1);
}

for (i = 0; i < size; i++) {
    tableVille="";
    for (j = 0; j <= size; j++) {
        blank = (size - tableRandom[j]);
        if(i<blank){
            tableVille+= " "
        }
        if(i>=blank){
            tableVille+= "╦"
        }
    }
    console.log(tableVille)
}