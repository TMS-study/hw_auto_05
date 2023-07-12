

export default class Calc {
    num1: number;
    num2: any;
    operation: string;


    constructor(num1: number, num2: any, operation: string) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }


    // сложение
    doSummation() {
        if (this.operation === '+') {
            return this.num1 + this.num2;
        }
    }

    //вычитание
    doSubtraction() {
        if (this.operation === '-') {
            return this.num1 - this.num2;
        }
    }

    // умножение
    doMultiplication() {
        if (this.operation === '*') {
            return this.num1 * this.num2;
        }
    }

    // деление
    doDidide() {
        if (this.operation === '/') {
            return this.num1 / this.num2;
        }
    }
}

// посмотрела что работает
// console.log(doDidide(4, 2, '/'));
// console.log(doMultiplication(4, 2, '*'));
// console.log(doSubtraction(4, 1, '-'));
// console.log(doSummation(4, 2, '+'));