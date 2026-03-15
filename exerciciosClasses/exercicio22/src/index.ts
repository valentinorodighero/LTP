import Aluno from "./Aluno.ts";
const aluno1 = new Aluno("João");
const media = aluno1.calcularMedia(7, 8, 9);
console.log(`Média: ${media}`);