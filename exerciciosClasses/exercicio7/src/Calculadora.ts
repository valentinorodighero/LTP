export default class Calculadora {
    num1: number
    num2: number
    constructor(num1: number, num2: number) {
        this.num1 = num1
        this.num2 = num2
    }
    somar(): void {
        console.log(this.num1 + this.num2)
    }
    subtrair(): void {
        console.log(this.num1 - this.num2)
    }
    multiplicar(): void {
        console.log(this.num1 * this.num2)
    }
    dividir(): void {
        console.log(this.num1 / this.num2)
    }
}