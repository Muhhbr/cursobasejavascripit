const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolvida após 3 segundos!");
    }, 3000);
});


promessa.then(mensagem => console.log(mensagem));