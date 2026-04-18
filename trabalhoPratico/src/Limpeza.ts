import Item from "./Item.ts";

export default class Limpeza extends Item {
    volumeMl: number
    toxico: boolean
    constructor(codigoBarras: string, nome: string, preco: number, estoque: number, volumeMl: number, toxico: boolean) {
        super(codigoBarras, nome, preco, estoque)
        this.volumeMl = volumeMl
        this.toxico = toxico
    }
    etiqueta(): string {
        const isToxico = this.toxico ? "ATENÇÃO: Produto tóxico" : "Não tóxico";
        return `${super.etiqueta()} | Volume: ${this.volumeMl} | ${isToxico}`;
    }
}