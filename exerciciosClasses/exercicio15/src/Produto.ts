export default class Produto {
    nome : string;
    preco : number;
    constructor(nome : string, preco : number) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual : number) {
        console.log(`Preço com desconto: R$${this.preco * (1 - percentual/100)}`);
    }
}