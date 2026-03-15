import type { Funcionario } from "./Funcionario.ts";

export default class Desenvolvedor implements Funcionario {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    trabalhar(): void {
        console.log(`${this.nome} está trabalhando.`);
    }
    programar(): void {
        console.log(`${this.nome} está programando.`);
    }
}