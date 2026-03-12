import ContaBancaria from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    constructor(titular: string, saldo: number) {
        super(titular, saldo);
    }
    calcularRendimento(taxa: number): number {
        return this.saldo * (taxa / 100);
    }
}