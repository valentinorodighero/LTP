import Produto from "./Produto.ts";
const produto = new Produto("Notebook", 3000, 2);
produto.calcularTotal();
produto.aplicarDesconto(10);