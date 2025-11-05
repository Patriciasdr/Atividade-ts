import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 1; i <= 10; i++) {
  let numero = readlinesync.questionInt(`Digite o ${i}º número: `);
  numeros.add(numero);
}

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log("\nListar dados do Set:");
for (let numero of numerosOrdenados) {
  console.log(numero);
}
