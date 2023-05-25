let tab =[
        [3, "fizz"],
        [5, "Buzz"],
        [7, "Tapioca"],
        [13, "Formica"]];

for(i=1;i<=100;i++){
    let value="";
    for(j=0;j<tab.length;j++){
        if(i%tab[j][0] == 0){
            value += tab[j][1];
        }
    }
    if(value == ""){
        value += i;
    }
    console.log(value);
}