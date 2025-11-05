import readlineSync from "readline-sync";
import { Queue } from "./Queue";

const fila = new Queue<string>();
let opcao: number;

do {
    console.log("\n====================================");
    console.log("      FILA DE CLIENTES DO BANCO");
    console.log("====================================");
    console.log("1 - Adicionar cliente na fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Chamar (retirar) cliente da fila");
    console.log("0 - Sair");
    console.log("====================================");

    opcao = readlineSync.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            const nome = readlineSync.question("Digite o nome do cliente: ");
            fila.enqueue(nome);
            console.log(`\nCliente "${nome}" foi adicionado à fila.`);
            console.log("Fila: ")
            fila.printQueue();
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("\nA fila está vazia!");
            } else {
                console.log("\nClientes na fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA fila está vazia! Nenhum cliente para chamar.");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`\nCliente "${clienteChamado}" foi chamado e removido da fila.`);
                console.log("\nFila: ")
                fila.printQueue()
            }
            break;

        case 0:
            console.log("\nPrograma finalizado. Até logo!");
            break;

        default:
            console.log("\nOpção inválida. Tente novamente!");
            break;
    }

} while (opcao !== 0);
