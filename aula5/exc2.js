
function saudacao(nome = "visitante") {
  return "Olá, " + nome + "! Bem-vindo(a)!";
}


const saudacaoFormal = (nome = "visitante") =>
  `Prezado(a) ${nome}, seja bem-vindo(a).`;

let nome = "Amanda";

console.log(saudacao(nome));
console.log(saudacaoFormal(nome));
console.log(saudacao());  