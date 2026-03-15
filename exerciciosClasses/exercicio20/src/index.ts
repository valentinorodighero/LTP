import Pessoa from "./Pessoa.ts";
const pessoa1 = new Pessoa("Lucas", 20);
console.log(`${pessoa1.nome} tem ${pessoa1.idadeEmDias()} dias de vida.`);