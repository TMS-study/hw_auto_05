import Calc from "../calculate";
import {expect} from "chai";
const should = require('chai').should();

// chai
let result1: any;
let expectedResult: any;
let num: any;

describe('Summation tests', function () {

    it('testSumOne', function () {
        num = new Calc(500, -500, '+');
        result1 = num.doSummation();
        expectedResult = 0;
    });

    it('testSumTwo', function () {
        num = new Calc(-200, -200, '+');
        result1 = num.doSummation();
        expectedResult = -400;
    });

    it('testSumThree', function () {
        num = new Calc(2, 0.0001, '+');
        result1 = num.doSummation();
        expectedResult = 2.0001;
    });

    afterEach(() => {
        expect(result1).equal(expectedResult);
    })
});

describe('Subtraction tests', function () {

    it('testSubOne', function () {
        num = new Calc(-50, -50, '-');
        result1 = num.doSubtraction();
        expectedResult = 0;
    });

    it('testSubTwo', function () {
        num = new Calc(2, 10, '-');
        result1 = num.doSubtraction();
        expectedResult = -8;
    });

    it('testSubThree', function () {
        num = new Calc(0.5, 400, '-');
        result1 = num.doSubtraction();
        expectedResult = -399.5;
    });

    afterEach(() => {
        expect(result1).to.equal(expectedResult);
    })

});

describe('Multiplication tests', function () {

    it('testMultyOne', function () {
        num = new Calc(0, -90, '*');
        result1 = num.doMultiplication();
        expectedResult = 0;
    });

    it('testMultyTwo', function () {
        num = new Calc(2, 3.14, '*');
        result1 = num.doMultiplication();
        expectedResult = 6.28;
    });

    it('testMultyThree', function () {
        num = new Calc(-3, -3, '*');
        result1 = num.doMultiplication();
        expectedResult = 9;
    });

    afterEach(() => {
        expect(result1).to.equal(expectedResult);
    })

});

describe('Didide tests', function () {

    it('testDidOne', function () {
        num = new Calc(10, 4, '/');
        result1 = num.doDidide();
        expectedResult = 2.5;
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
        expectedResult.should.equal(result1);
    });

});
