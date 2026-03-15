export default class Palindromo {
    palavra: string;
    constructor(palavra: string) {
        this.palavra = palavra;
    }
    verificarPalindromo(): boolean {
        const palavraInvertida = this.palavra.split('').reverse().join('');
        return this.palavra === palavraInvertida;
    }
}