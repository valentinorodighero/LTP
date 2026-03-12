export default class Mensageiro {
    remetente: string;
    constructor(remetente: string) {
        this.remetente = remetente;
    }
    enviar(destinatario: string, mensagem: string): void {
        console.log(`De: ${this.remetente}\nPara: ${destinatario}\nMensagem: ${mensagem}`);
    }
}