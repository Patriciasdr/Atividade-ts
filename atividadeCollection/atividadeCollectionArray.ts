import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 1; i <= 5; i++) {
  let cor = readlinesync.question(`Digite a ${i}ª cor: `);
  cores.push(cor);
}

console.log("\nListar todas as cores:");
for (let cor of cores) {
  console.log(cor);
}

cores.sort();

console.log("\nOrdenar as cores:");
for (let cor of cores) {
  console.log(cor);
}
