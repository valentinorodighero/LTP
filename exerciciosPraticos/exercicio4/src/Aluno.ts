export default class Aluno {
    nome: string;
    notas: number[];
    constructor(nome: string, notas: number[]) {
        this.nome = nome;
        this.notas = notas;
    }
    calcularMedia(): number {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
    estaAprovado(mediaMinima: number): boolean {
        return this.calcularMedia() >= mediaMinima;
    }
}