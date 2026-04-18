import Item from "./Item.ts";

export default class Eletrodomestico extends Item {
    voltagem: number
    potenciaW: number
    constructor(codigoBarras: string, nome: string, preco: number, estoque: number, voltagem: number, potenciaW: number) {
        super(codigoBarras, nome, preco, estoque)
        this.voltagem = voltagem
        this.potenciaW = potenciaW
    }
    etiqueta(): string {
        return `${super.etiqueta()} | Tensão: ${this.voltagem}v | Potência: ${this.potenciaW}W`;
    }
}