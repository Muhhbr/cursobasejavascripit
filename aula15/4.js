let segundos = 0;
let minutos = 0;

function formatarNumero(num) {
    return num.toString().padStart(2, '0');
}

function exibirCronometro() {
    console.log(`${formatarNumero(minutos)}:${formatarNumero(segundos)}`);
}

const cronometro = setInterval(() => {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    exibirCronometro();
}, 1000);


setTimeout(() => {
    clearInterval(cronometro);
    console.log("Cronômetro finalizado!");
}, 120000);