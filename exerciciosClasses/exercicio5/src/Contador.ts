export default class Contador {
    valor: number = 0
    incrementar(): void {
        this.valor++
    }
    mostrar(): void {
        console.log("Valor atual:", this.valor)
    }
}