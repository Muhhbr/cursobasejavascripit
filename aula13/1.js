function executarDuasVezes(funcao) {
    funcao();
    funcao();
}


executarDuasVezes(() => console.log("Executando!"));

