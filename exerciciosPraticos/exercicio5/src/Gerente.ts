import type { Funcionario } from "./Funcionario.ts";

export default class Gerente implements Funcionario {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    trabalhar(): void {
        console.log(`${this.nome} está trabalhando.`);
    }
    gerenciar(): void {
        console.log(`${this.nome} está gerenciando.`);
    }
}