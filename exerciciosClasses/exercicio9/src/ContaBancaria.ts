export default class ContaBancaria {
    titular: string;
    saldo: number = 0
    constructor(titular: string) {
        this.titular = titular
    }
    depositar(valor: number): void {
        this.saldo += valor
        console.log(this.saldo)
    }
    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(this.saldo)
        }
    }
}