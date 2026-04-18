import Item from "./Item.ts";

export default class Alimento extends Item {
    dataValidade: Date
    calorias: number
    vegano: boolean
    constructor(codigoBarras: string, nome: string, preco: number, estoque: number, dataValidade: Date, calorias: number, vegano: boolean) {
        super(codigoBarras, nome, preco, estoque)
        this.dataValidade = dataValidade
        this.calorias = calorias
        this.vegano = vegano
    }
    verificarValidade(): string {
        const hoje = new Date();
        if (hoje > this.dataValidade) {
            return `O alimento ${this.nome} está vencido.`;
        } else {
            return `O alimento ${this.nome} está válido até ${this.dataValidade.toLocaleDateString()}.`;
        }
    }
    etiqueta(): string {
        const statusValidade = this.verificarValidade() ? "No prazo" : "VENCIDO";
        const isVegano = this.vegano ? "Sim" : "Não";
        return `${super.etiqueta()} | Validade: ${statusValidade} | Calorias: ${this.calorias}kcal | Vegano: ${isVegano}`;
    }
}