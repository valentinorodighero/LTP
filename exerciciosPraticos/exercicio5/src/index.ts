import type { Funcionario } from "./Funcionario.ts";
import Gerente from "./Gerente.ts";
import Desenvolvedor from "./Desenvolvedor.ts";

const gerente: Funcionario = new Gerente("Carlos");
const desenvolvedor: Funcionario = new Desenvolvedor("Ana");
gerente.trabalhar();
(gerente as Gerente).gerenciar();
desenvolvedor.trabalhar();
(desenvolvedor as Desenvolvedor).programar();