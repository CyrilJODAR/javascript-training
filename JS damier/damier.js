let size = prompt();
// let size = 10;
let char = prompt();
// let char = "X"
let dam;

for(i=1;i<=size;i++){
    dam = "";
    for(j=1;j<=size;j++){
        if((j+i)%2==0){
            dam += char;
        } else{
            dam += " ";
        }
    }
    console.log(dam);
}