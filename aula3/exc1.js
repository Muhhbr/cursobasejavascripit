let idade = 17;

if (idade < 16) {
  console.log("Não pode votar.");
} else if (idade < 18) {
  console.log("Voto facultativo.");
} else if (idade < 70) {
  console.log("Voto obrigatório.");
} else {
  console.log("Voto facultativo (acima de 70).");
}