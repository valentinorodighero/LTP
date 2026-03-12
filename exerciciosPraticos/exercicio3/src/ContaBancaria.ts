export default class ContaBancaria {
    titular: string
    saldo: number
    constructor (titular: string, saldo: number) {
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor: number): void {
        this.saldo += valor
    }
    sacar(valor: number):boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}