export default class Produto {
    nome: string
    preco: number
    constructor(nome: string, preco: number){
        this.preco = preco
        this.nome = nome
    }
    estaCaro(): boolean {
        console.log(this.preco > 100)
        return this.preco > 100
    }
}