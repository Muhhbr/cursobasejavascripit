
function validarCampos() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Preencha os dois campos!");
        return false;
    }
    return true;
}


function exibirResultado(valor) {
    let resultado = document.getElementById("resultado");
    resultado.textContent = valor;
}

function somar() {
    if (!validarCampos()) return;

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let soma = num1 + num2;
    exibirResultado(soma);
}

function subtrair() {
    if (!validarCampos()) return;

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let subtracao = num1 - num2;
    exibirResultado(subtracao);
}

function multiplicar() {
    if (!validarCampos()) return;

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let produto = num1 * num2;
    exibirResultado(produto);
}

function dividir() {
    if (!validarCampos()) return;

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (num2 === 0) {
        alert("Divisão por zero não é permitida!");
        return;
    }

    let divisao = num1 / num2;
    exibirResultado(divisao);
}


document.getElementById("btnSomar").addEventListener("click", somar);
document.getElementById("btnSubtrair").addEventListener("click", subtrair);
document.getElementById("btnMultiplicar").addEventListener("click", multiplicar);
document.getElementById("btnDividir").addEventListener("click", dividir);