import Aluno from "./Aluno.ts";
import Turma from "./Turma.ts";

const turma = new Turma("Info 3A", []);
turma.adicionarAluno(new Aluno("João", [7, 8, 9]));
turma.adicionarAluno(new Aluno("Maria", [5, 6, 7]));
console.log(turma.obterMediaGeral());