import * as readlineSync from 'readline-sync';
import { Cliente } from './interfaces';
import { lerClientes, escreverClientes } from './gerenciadorDeDados';

let proximoIdCliente = 1;

// Função para cadastrar um novo cliente
function cadastrarCliente() {
  console.clear();
  console.log('--- Cadastro de Novo Cliente ---');
  
  const nome = readlineSync.question('Digite o nome do cliente: ');
  const telefone = readlineSync.question('Digite o telefone do cliente: ');

  const clientes = lerClientes();
  
  // Define o próximo ID baseado no último cliente da lista
  if (clientes.length > 0) {
    proximoIdCliente = Math.max(...clientes.map(c => c.id)) + 1;
  }

  const novoCliente: Cliente = {
    id: proximoIdCliente,
    nome: nome,
    telefone: telefone,
  };

  clientes.push(novoCliente);
  escreverClientes(clientes);

  console.log(`\nCliente "${nome}" cadastrado com sucesso!`);
  readlineSync.keyInPause(); // Pausa até o usuário pressionar uma tecla
}

// Função para listar todos os clientes
function listarClientes() {
  console.clear();
  console.log('--- Lista de Clientes ---');
  const clientes = lerClientes();

  if (clientes.length === 0) {
    console.log('Nenhum cliente cadastrado.');
  } else {
    console.table(clientes);
  }
  readlineSync.keyInPause();
}


// Menu principal
function menu() {
  while (true) {
    console.clear();
    console.log('--- Sistema de Pizzaria ---');
    console.log('1. Cadastrar Cliente');
    console.log('2. Listar Clientes');
    console.log('0. Sair');

    const opcao = readlineSync.question('Escolha uma opcao: ');

    switch (opcao) {
      case '1':
        cadastrarCliente();
        break;
      case '2':
        listarClientes();
        break;
      case '0':
        console.log('Saindo do sistema...');
        return;
      default:
        console.log('Opcao invalida!');
        readlineSync.keyInPause();
    }
  }
}

// Inicia o programa
menu();