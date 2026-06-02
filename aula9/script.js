
let botao = document.getElementById("botaoMudaTexto");
let paragrafo = document.getElementById("paragrafo1");

botao.addEventListener("click", function() {
    paragrafo.textContent = "Texto alterado pelo clique! 🎉";
});


let input = document.getElementById("meuInput");
let feedback = document.getElementById("feedback");

input.addEventListener("input", function(evento) {
    let textoDigitado = evento.target.value;
    feedback.textContent = "Você digitou: " + textoDigitado;
});


let imagem = document.getElementById("minhaImagem");

imagem.addEventListener("mouseenter", function() {
    imagem.classList.add("borda-especial");
});


imagem.addEventListener("mouseleave", function() {
    imagem.classList.remove("borda-especial");
});