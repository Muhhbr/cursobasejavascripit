function simularRequisicao() {
    return new Promise((resolve, reject) => {
        const sucesso = Math.random() > 0.3; 
        setTimeout(() => {
            if (sucesso) {
                resolve({ id: 1, nome: "Produto X", preco: 29.99 });
            } else {
                reject("Erro ao carregar os dados!");
            }
        }, 2000);
    });
}

async function carregarDados() {
    console.log("Carregando dados...");
    try {
        const dados = await simularRequisicao();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Falha na requisição:", erro);
    } finally {
        console.log("Requisição finalizada.");
    }
}


carregarDados();