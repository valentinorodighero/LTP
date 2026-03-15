export class Operacoes {
    calcular(a: number, b: number, operacao: string) : void {
        if (operacao == "somar") {
            console.log(`${a} + ${b} = ${a + b}`)
        } else if (operacao == "subtrair") {
            console.log(`${a} = ${b} = ${a - b}`)
        } else if (operacao == "multiplicar") {
            console.log(`${a} * ${b} = ${a * b}`)
        } else if (operacao == "divisão") {
            console.log(`${a} / ${b} = ${a / b}`)
        }
    }
}