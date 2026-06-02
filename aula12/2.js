function multiplicador(x) {
    return function(y) {
        return x * y;
    };
}

const multiplicarPor3 = multiplicador(3);
console.log(multiplicarPor3(5)); // 15
console.log(multiplicarPor3(10)); // 30

const multiplicarPor7 = multiplicador(7);
console.log(multiplicarPor7(4)); // 28