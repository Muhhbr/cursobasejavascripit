const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dados carregados com sucesso!");
    }, 3000);
});

promessa
    .then(mensagem => {
        console.log(mensagem);
    })
    .catch(erro => {
        console.error("Erro:", erro);
    });