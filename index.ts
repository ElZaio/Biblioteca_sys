// Importa a biblioteca para ler a entrada do usuário de forma síncrona.
const readline = require('readline-sync');

// O loop 'while (true)' mantém o menu rodando até que o usuário escolha sair.
while (true) {
    console.log("-----------------------------------");
    console.log("DIGITE O NUMERO PARA SELECIONAR A FUNÇÃO");
    console.log("1 - EMPRESTAR LIVRO");
    console.log("2 - RECEBER LIVRO EMPRESTADO");
    console.log("3 - SAIR ");
    console.log("-----------------------------------");

    // Pede ao usuário para digitar uma opção e armazena na variável 'opcao'.
    // O parseInt transforma o texto digitado em um número inteiro.
    const opcao = parseInt(readline.question("Digite sua opcao: "));

    // Agora, usamos a estrutura 'if' para verificar o valor da variável 'opcao'.

    if (opcao === 1) {
        // Se o usuário digitou 1, executa este bloco.
        console.log("\n>> FUNÇÃO EMPRESTAR LIVRO SELECIONADA. <<\n");
        // Aqui você adicionaria a lógica para emprestar um livro.

    } else if (opcao === 2) {
        // Se não for 1, mas for 2, executa este bloco.
        console.log("\n>> FUNÇÃO RECEBER LIVRO EMPRESTADO SELECIONADA. <<\n");
        // Aqui você adicionaria a lógica para receber um livro.

    } else if (opcao === 3) {
        // Se não for 1 nem 2, mas for 3, executa este bloco.
        console.log("\nSaindo do sistema...\n");
        break; // O comando 'break' interrompe o loop 'while (true)' e encerra o programa.

    } else {
        // Se a opção digitada não for nenhuma das anteriores (1, 2 ou 3).
        console.log("\nOpção inválida! Por favor, digite 1, 2 ou 3.\n");
    }
}