
function multiplicar(a, b) {
  return a * b;
}


const multiplicarArrow = (a, b) => a * b;

let a =12;
let b = 3;

console.log("Tradicional:", multiplicar(a, b));
console.log("Arrow:", multiplicarArrow(a, b));
console.log("Dobro de a:", multiplicar(a, 2));