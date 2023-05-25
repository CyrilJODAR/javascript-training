let value = prompt();
const low = 0;
const high = 10000;
console.log(value);
function fDigicode(low, high) {
  let lowNumb = Math.ceil(low);
  let highNumb = Math.floor(high);
  const digicode = lowNumb + Math.random()*(highNumb-lowNumb);
  return Math.floor(digicode);
}
let i = 0;

while(i < 10000) {
  if (i === digicode) {
    console.log("Le digicode est " + i+".");
    break;
  } else {
    i++;
  }
}