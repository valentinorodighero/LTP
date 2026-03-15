export default class Usuario {
    nome: string
    email: string
    constructor(nome: string, email: string) {
        this.nome = nome
        this.email = email
    }
    validarEmail(): void {
        for (let i = 0; i < this.email.length; i++) {
            if (this.email[i] == '@' || this.email[i] == '.') {
                console.log('Email válido')
            }
        }
    }
}