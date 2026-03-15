export default class Investimento {
    capital: number;
    taxa: number;
    constructor(capital: number, taxa: number) {
        this.capital = capital;
        this.taxa = taxa;
    }
    calcularJuros(anos: number): number {
        return this.capital * this.taxa * anos;
    }
}