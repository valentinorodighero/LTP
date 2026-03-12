export default class Cachorro {
    nome: string
    raca: string
    constructor(nome: string, raca: string) {
        this.nome = nome
        this.raca = raca
    }
    latir(): void {
        console.log("Au Au!")
    }
}