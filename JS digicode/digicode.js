let digicode = [];
let crack = [];
let i = 0;
for (let i = 0; i < 4; i++) {
  digicode.push(Math.floor(Math.random()*10));
}

while(i<4){
  for(let j = 0; j <=9 ; j++){
    if(digicode[i] == j){
      crack.push(j);
    } 
  }
  i++;
}
  console.log("crack " + crack + " digicode " + digicode)
