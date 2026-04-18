import Item from "./Item.ts";

export default class Higiene extends Item {
    genero: string
    constructor(codigoBarras: string, nome: string, preco: number, estoque: number, genero: string) {
        super(codigoBarras, nome, preco, estoque)
        this.genero = genero
    }
    etiqueta(): string {
        return `${super.etiqueta()} | Gênero recomendado: ${this.genero}`;
    }
}