let size = 12;
let empty = " ";
let char = "X";
let tableRandom = [];
let table=[];

// THIS IS A TEST

for (i = 0; i < size; i++) {
    tableRandom[i] = Math.floor(Math.random() * 10);
}


for (i = 0; i < size; i++) {
    table[i] = [];
    for (j = 0; j < size; j++) {
        table[i][j] = empty;
        blank = (size - tableRandom[j]);
        if(blank>=i){
            table[i][j] = char
        }
    }
    console.log(table[i])
}






