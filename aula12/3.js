function criarContador() {
    let i = 0;
    return function() {
        return ++i;
    }
}

let c1 = criarContador();
let c2 = criarContador();

console.log(c1());
console.log(c1());
console.log(c2());