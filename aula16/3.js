function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
    console.log("Iniciando...");
    await esperar(3000);
    console.log("Promise resolvida após 3 segundos!");
}

executar();