function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
}


function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}


console.log(calcular(10, 5, soma));        
console.log(calcular(10, 5, subtracao));      
console.log(calcular(10, 5, multiplicacao));  
console.log(calcular(10, 5, divisao));        
console.log(calcular(10, 0, divisao));        