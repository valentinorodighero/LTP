export default class Produto {
    nome : string;
    preco : number;
    constructor(nome : string, preco : number) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(desconto : number) {
        console.log(`Preço com desconto: R$${this.preco * (1 - desconto/100)}`);
    }
}