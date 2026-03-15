export default class Aluno {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    calcularMedia(nota1: number, nota2: number, nota3: number): number {
        return (nota1 + nota2 + nota3) / 3;
    }
}