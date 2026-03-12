export default class Produto {
    nome: string
    preco: number
    quantidade: number
    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal(): number {
        return this.preco * this.quantidade
    }
    aplicarDesconto(percentual: number) : void {
        console.log(`Preço com desconto: ${this.preco - (percentual/100 * this.preco)}`)}
}