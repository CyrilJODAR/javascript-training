for(i =1;i<=100;i++){
    let value = "";
    if(i%3==0){
        value += "Fizz";
    }
    if(i%5==0){
        value += "Buzz";
    }
    if(value==""){
        value = i;
    }
    console.log(value);
}