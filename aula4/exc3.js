
let tentativas = 0;
let senhaCorreta = "1234";
let entrada = "SENHA_INPUT"; 

do {
  tentativas++;
  if (entrada === senhaCorreta) {
    console.log("Senha correta! Acesso liberado.");
  } else {
    console.log("Tentativa " + tentativas + ": senha incorreta.");
    entrada = senhaCorreta; 
  }
} while (entrada !== senhaCorreta);

console.log("Total de tentativas:", tentativas);