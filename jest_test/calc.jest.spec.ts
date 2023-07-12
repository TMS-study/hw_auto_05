import Calc from "../calculate";

// jest
let result1: any;
let expectedResult: any;
let num: any;

describe('Summation tests', function () {


    it('testSumOne', function () {
        num = new Calc(10.5, 2, '+');
        result1 = num.doSummation();
        expectedResult = 12.5;
        expect(result1).toEqual(expectedResult);
    });

    it('testSumTwo', function () {
        num = new Calc(20, -20, '+');
        result1 = num.doSummation();
        expectedResult = 0;
        expect(result1).toEqual(expectedResult);
    });

    it('testSumThree', function () {
        num = new Calc(20, 'abc', '+');
        result1 = num.doSummation();
        expectedResult = isNaN(result1);
        expect(isNaN(result1)).toEqual(expectedResult);
    });
});

describe('Subtraction tests', function () {

    it('testSubOne', function () {
        num = new Calc(50, 0, '-');
        result1 = num.doSubtraction();
        expectedResult = 50;
        expect(result1).toBe(expectedResult);
    });

    it('testSubTwo', function () {
        num = new Calc(-2, -42, '-');
        result1 = num.doSubtraction();
        expectedResult = 40;
        expect(result1).toBe(expectedResult);
    });

    it('testSubThree', function () {
        num = new Calc(20, 40, '-');
        result1 = num.doSubtraction();
        expectedResult = -20;
        expect(result1).toBe(expectedResult);
    });
});

describe('Multiplication tests', function () {

    it('testMultyOne', function () {
        num = new Calc(502, 0, '*');
        result1 = num.doMultiplication();
        expectedResult = 0;
        expect(result1).toEqual(expectedResult);
    });

    it('testMultyTwo', function () {
        num = new Calc(2, 305, '*');
        result1 = num.doMultiplication();
        expectedResult = 610;
        expect(result1).toEqual(expectedResult);
    });

    it('testMultyThree', function () {
        num = new Calc(-2, 2.05, '*');
        result1 = num.doMultiplication();
        expectedResult = -4.1;
        expect(result1).toEqual(expectedResult);
    });

});

describe('Didide tests', function () {

    it('testDidOne', function () {
        num = new Calc(99, 33, '/');
        result1 = num.doDidide();
        expectedResult = 3;
        expect(result1).toBe(expectedResult);
    });

    it('testDidTwo', function () {
        num = new Calc(0, 2, '/');
        result1 = num.doDidide();
        expectedResult = 0;
        expect(result1).toBe(expectedResult);
    });

    it('testDidThree', function () {
        num = new Calc(2, -1, '/');
        result1 = num.doDidide();
        expectedResult = -2;
        expect(result1).toBe(expectedResult);
    });

});


