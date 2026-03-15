export default class Tabuada {
    numero: number
    constructor(numero: number) {
        this.numero = numero
    }
    mostrarTabuada(): void {
        for (let i: number = 1; i <= 10; i++) {
            console.log(`${this.numero} X ${i} = ${this.numero * i}`)
        }
    }
}