import fs from 'fs';
import { Cliente } from './interfaces';

const caminhoClientes = './data/clientes.csv';

// Função para ler clientes do arquivo CSV
export function lerClientes(): Cliente[] {
  try {
    const conteudo = fs.readFileSync(caminhoClientes, 'utf-8');
    const linhas = conteudo.split('\n').filter(Boolean); // filter(Boolean) remove linhas vazias

    if (linhas.length === 0) {
      return [];
    }

    // Ignora o cabeçalho (primeira linha) e mapeia o resto
    return linhas.slice(1).map(linha => {
      const [id, nome, telefone] = linha.split(',');
      return {
        id: Number(id),
        nome: nome,
        telefone: telefone,
      };
    });
  } catch (error) {
    // Se o arquivo não existir, retorna uma lista vazia
    return [];
  }
}

// Função para escrever clientes no arquivo CSV
export function escreverClientes(clientes: Cliente[]): void {
  const cabecalho = 'id,nome,telefone';
  const linhas = clientes.map(c => `${c.id},${c.nome},${c.telefone}`);
  const conteudo = [cabecalho, ...linhas].join('\n');

  // Garante que a pasta 'data' exista
  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
  }

  fs.writeFileSync(caminhoClientes, conteudo, 'utf-8');
}