import Intervalo from "./Intervalo.ts";
const intervalo1 = new Intervalo(1, 10);
console.log(`5 está no intervalo: ${intervalo1.contem(5)}`);
console.log(`15 está no intervalo: ${intervalo1.contem(15)}`);