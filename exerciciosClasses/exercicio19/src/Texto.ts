export default class Texto {
    conteudo: string;
    constructor(conteudo: string) {
        this.conteudo = conteudo;
    }
    repetir(vezes: number): string {
        return this.conteudo.repeat(vezes);
    }
}