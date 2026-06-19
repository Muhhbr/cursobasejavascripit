let intervaloId;

function iniciarIntervalo() {
    let i = 0;
    intervaloId = setInterval(() => {
        i++;
        console.log("Executando...", i);
    }, 1000);
    console.log("Intervalo iniciado!");
}

function pararIntervalo() {
    clearInterval(intervaloId);
    console.log("Intervalo parado!");
}


iniciarIntervalo();


setTimeout(() => {
    pararIntervalo();
}, 5000);