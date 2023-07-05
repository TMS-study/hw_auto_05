import Calc from "./hw_04";


export default class Tests {

static testSumOne() {
    let num = new Calc(2, 2, '+');
    let result1 = num.doSummation()
    if (result1 === 4) {
        return 'Passed testSumOne'
    } else 'Failed testSumOne'
}

static testSumTwo() {
    let num = new Calc(2, -2, '+');
    let result1 = num.doSummation()
    if (result1 === 0) {
        return 'Passed testSumTwo'
    } else 'Failed testSumTwo'
}

static testSumThree() {
    let num = new Calc(2, 'abc', '+');
    let result1 = num.doSummation()
    if (isNaN(result1)) {
        return 'Passed testSumThree'
    } else 'Failed testSumThree'
}

static testSubOne() {
    let num = new Calc(5, 0, '-');
    let result1 = num.doSubtraction()
    if (result1 === 5) {
        return 'Passed testSubOne'
    } else 'Failed testSubOne'
}

static testSubTwo() {
    let num = new Calc(2, 1.5, '-');
    let result1 = num.doSubtraction()
    if (result1 === 0.5) {
        return 'Passed testSubTwo'
    } else 'Failed testSubTwo'
}

static testSubThree() {
    let num = new Calc(2, 4, '-');
    let result1 = num.doSubtraction()
    if (result1 === -2) {
        return 'Passed testSubThree'
    } else 'Failed testSubThree'
}

static testMultyOne() {
    let num = new Calc(5, null, '*');
    let result1 = num.doMultiplication()
    if (result1 !== 5) {
        return 'Passed testMultyOne'
    } else 'Failed testMultyOne'
}

static testMultyTwo() {
    let num = new Calc(2, 2 ** 3, '*');
    let result1 = num.doMultiplication()
    if (result1 === 16) {
        return 'Passed testMultyTwo'
    } else 'Failed testMultyTwo'
}

static testMultyThree() {
    let num = new Calc(2, 2, '*');
    let result1 = num.doMultiplication()
    if (result1 === 4) {
        return 'Passed testMultyThree'
    } else 'Failed testMultyThree'
}

static testDidOne() {
    let num = new Calc(9, 3, '/');
    let result1 = num.doDidide()
    if (result1 === 3) {
        return 'Passed testDidOne'
    } else 'Failed testDidOne'
}

static testDidTwo() {
    let num = new Calc(2, 0, '/');
    let result1 = num.doDidide()
    if (result1 !== 2) {
        return 'Passed testDidTwo'
    } else 'Failed testDidTwo'
}

static testDidThree() {
    let num = new Calc(2, 2, '/');
    let result1 = num.doDidide()
    if (result1 === 1) {
        return 'Passed testDidThree'
    } else 'Failed testDidThree'
}

};




