import Temperatura from "./Temperatura.ts";
const temperatura1 = new Temperatura(25);
console.log(temperatura1.converterParaFahrenheit() + " F°");
console.log(temperatura1.converterParaKelvin() + " K");