export default class Fatorial {
    numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    calcular(): number {
        let resultado = 1;
        for (let i = 1; i <= this.numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}