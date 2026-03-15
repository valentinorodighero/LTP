export default class Numeros {
    a: number;
    b: number;
    c: number;
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    maior() {
        if (this.a > this.b && this.a > this.c) {
            return this.a;
        } else if (this.b > this.a && this.b > this.c) {
            return this.b;
        } else {
            return this.c;
        }
    }
}