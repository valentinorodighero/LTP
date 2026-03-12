import { ContaPoupanca } from "./ContaPoupanca.ts";
import ContaBancaria from "./ContaBancaria.ts";

const conta = new ContaPoupanca("Maria", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.calcularRendimento(5));