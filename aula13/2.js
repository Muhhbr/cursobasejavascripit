function criarSaudacao(saudacao) {
    return function(nome) {
        console.log(`${saudacao}, ${nome}!`);
    };
}


const saudarFormal = criarSaudacao("Carpe Diem");
saudarFormal("Carlos"); 
const saudarInformal = criarSaudacao("Hasta La Vista");
saudarInformal("Mandinha"); 