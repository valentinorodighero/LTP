export default class Aluno {
    nome: string
    curso: string
    constructor(nome: string, curso: string) {
        this.nome = nome
        this.curso = curso
    }
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e curso ${this.curso}`)
    }
}