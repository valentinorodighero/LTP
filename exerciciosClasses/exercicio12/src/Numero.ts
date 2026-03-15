export default class Numero {
    valor: number
    constructor(valor: number) {
        this.valor = valor
    }
    comparar(outroValor: number): void {
        if (this.valor > outroValor) {
            console.log("maior")
        } else if (this.valor < outroValor) {
            console.log("menor")
        } else if (this.valor == outroValor) {
            console.log("igual")
        }
    }
}