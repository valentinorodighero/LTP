export default class Saudacao {
    nome: string
    horario: number
    constructor(nome: string, horario: number) {
        this.nome = nome
        this.horario = horario
    }
    saudar(): void {
        if (this.horario >= 5 && this.horario < 12) {
            console.log(`Bom dia, ${this.nome}!`)
        } else if (this.horario >= 12 && this.horario < 18) {
            console.log(`Boa tarde, ${this.nome}!`)
        } else if (this.horario >= 18 || this.horario < 5) {
            console.log(`Boa noite, ${this.nome}!`)
        }
    }
}