function saudacao(nome) {
    return function() {
        console.log(`Olá, ${nome}!`);
    };
}

const saudarCarlos = saudacao("Murillo");
saudarCarlos(); 

const saudarMaria = saudacao("Amanda");
saudarMaria(); 