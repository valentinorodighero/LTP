import Aluno from "./Aluno.ts";

export default class Turma {
    nomeTurma: string;
    alunos: Aluno[]
    constructor(nomeTurma: string, alunos: Aluno[]) {
        this.nomeTurma = nomeTurma;
        this.alunos = alunos;
    }
    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }
    obterMediaGeral(): number {
        const somaMedias = this.alunos.reduce((acc, aluno) => acc + aluno.calcularMedia(), 0);
        return somaMedias / this.alunos.length;
    }
}