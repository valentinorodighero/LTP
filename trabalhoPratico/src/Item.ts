export default class Item {
    codigoBarras: string
    nome: string
    preco: number
    estoque: number
    constructor (codigoBarras: string, nome: string, preco: number, estoque: number) {
        this.codigoBarras = codigoBarras
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
    etiqueta(): string {
        return `${this.nome} - Código de Barras: ${this.codigoBarras}, Preço: R$${this.preco}`;
  }
}