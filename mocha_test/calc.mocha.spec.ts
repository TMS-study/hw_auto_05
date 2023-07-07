import Calc from "../calculate";
import assert from "assert";


// Mocha
let result1: any;
let expectedResult: any;
let num: any;

describe('Summation tests', function () {


    it('testSumOne', function () {
        num = new Calc(2, 2, '+');
        result1 = num.doSummation();
        expectedResult = 4;
        assert.equal(result1, expectedResult);
    });

    it('testSumTwo', function () {
        num = new Calc(2, -2, '+');
        result1 = num.doSummation();
        expectedResult = 0;
        assert.equal(result1, expectedResult);
    });

    it('testSumThree', function () {
        num = new Calc(2, 'abc', '+');
        result1 = num.doSummation();
        expectedResult = isNaN(result1);
        assert.strictEqual(isNaN(result1), expectedResult);
    });
});

describe('Subtraction tests', function () {

    it('testSubOne', function () {
        num = new Calc(5, 0, '-');
        result1 = num.doSubtraction();
        expectedResult = 5;
    });

    it('testSubTwo', function () {
        num = new Calc(2, 1.5, '-');
        result1 = num.doSubtraction();
        expectedResult = 0.5;
    });

    it('testSubThree', function () {
        num = new Calc(2, 4, '-');
        result1 = num.doSubtraction();
        expectedResult = -2;

    });

    afterEach(() => {
        assert.equal(result1, expectedResult);
    })
});

describe('Multiplication tests', function () {

    it('testMultyOne', function () {
        num = new Calc(5, 0, '*');
        result1 = num.doMultiplication();
        expectedResult = 0;
    });

    it('testMultyTwo', function () {
        num = new Calc(2, 2**3, '*');
        result1 = num.doMultiplication();
        expectedResult = 16;
    });

    it('testMultyThree', function () {
        num = new Calc(2, 2, '*');
        result1 = num.doMultiplication();
        expectedResult = 4;
    });

    afterEach(() => {
        assert.equal(result1, expectedResult);
    })

});

describe('Didide tests', function () {

    it('testDidOne', function () {
        num = new Calc(9, 3, '/');
        result1 = num.doDidide();
        expectedResult = 3;
    });

    it('testDidTwo', function () {
        num = new Calc(2, 0, '/');
        result1 = num.doDidide();
        expectedResult = Infinity;
    });

    it('testDidThree', function () {
        num = new Calc(2, 0.555, '/');
        result1 = num.doDidide();
        expectedResult = 3.603603603603603;
    });

    afterEach(() => {
        assert.equal(result1, expectedResult);
    })

});


