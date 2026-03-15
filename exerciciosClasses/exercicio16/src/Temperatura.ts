export default class Temperatura {
    celsius: number;
    constructor(celsius: number) {
        this.celsius = celsius;
    }
    converterParaFahrenheit(): number {
        return (this.celsius * 9/5) + 32;
    }
    converterParaKelvin(): number {
        return this.celsius + 273.15;
    }
}