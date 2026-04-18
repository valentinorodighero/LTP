import Item from "./Item.ts";
import Alimento from "./Alimento.ts";
import Limpeza from "./Limpeza.ts";
import Higiene from "./Higiene.ts";
import Eletrodomestico from "./Eletrodomestico.ts";

const maca = new Alimento("12345", "Maçã Gala", 3.50, 100, new Date('2026-12-31'), 52, true);
const sabao = new Limpeza("67890", "Sabão Líquido", 22.90, 50, 2000, true);
const shampoo = new Higiene("11111", "Shampoo Anticaspa", 15.00, 30, "Unissex");
const liquidificador = new Eletrodomestico("22222", "Liquidificador", 150.00, 10, 110, 500);
const carrinho: Item[] = [maca, sabao, shampoo, liquidificador];

console.log("==================================================");
console.log("             S U P E R M E R C A D O              ");
console.log("==================================================");
console.log("CÓDIGO DESCRIÇÃO                      VALOR (R$)  ");
console.log("--------------------------------------------------");

let total = 0;
for (const produto of carrinho) {
    const codigo = produto.codigoBarras.padEnd(6);
    const nome = produto.nome.padEnd(30);
    const preco = produto.preco.toFixed(2).padStart(8);
    console.log(`${codigo} ${nome} ${preco}`);

    const etiquetaCompleta = produto.etiqueta();
    const partesDaEtiqueta = etiquetaCompleta.split(' | ');
    partesDaEtiqueta.shift();
    const infosEspecificas = partesDaEtiqueta.join(' | ');
    
    console.log(`       ↳ Informações: ${infosEspecificas}\n`);
    total += produto.preco;
}

console.log("--------------------------------------------------");
console.log(`TOTAL A PAGAR:                        R$ ${total.toFixed(2).padStart(8)}`);
console.log("==================================================");