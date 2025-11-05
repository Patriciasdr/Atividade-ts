import readlinesync = require("readline-sync");
import { Stack } from "./Stack";

const pilha = new Stack<string>();
const livrosEmOrdem: string[] = [];
let opcao: number;

do {
    console.clear();
    console.log("==================================");
    console.log("GERENCIADOR DE LIVROS (PILHA)");
    console.log("==================================");
    console.log("1 - Adicionar um novo livro na pilha");
    console.log("2 - Listar todos livros da pilha");
    console.log("3 - Retirar um livro da pilha");
    console.log("0 - Sair");
    console.log("==================================");

    opcao = readlinesync.questionInt("\nDigite uma opção: ");

    switch (opcao) {
        case 1:
            console.log("\nDigite o nome: ");
            const nome = readlinesync.question("");
            pilha.push(nome);
            livrosEmOrdem.push(nome);
            console.log("\nPilha:");
            livrosEmOrdem.forEach(livro => console.log(livro));
            console.log(`\nLivro adicionado!`);
            readlinesync.question("\nPressione ENTER para continuar...");
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:");
                livrosEmOrdem.forEach(livro => console.log(livro));
            }
            readlinesync.question("\nPressione ENTER para continuar...");
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia! Nenhum livro para retirar.");
            } else {
                const livroRetirado = pilha.pop();
                livrosEmOrdem.pop();
                console.log("\nPilha atual:");
                livrosEmOrdem.forEach(livro => console.log(livro));
                console.log(`\nUm Livro foi retirado da pilha!`);
            }
            readlinesync.question("\nPressione ENTER para continuar...");
            break;

        case 0:
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.");
            readlinesync.question("\nPressione ENTER para continuar...");
            break;
    }

} while (opcao !== 0);