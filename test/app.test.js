const chai = require('chai');
const expect = chai.expect;

describe('Sample Test', () => {
    it('should always pass', () => {
        expect(true).to.be.true;
    });

    describe('Arithmetic Operations', () => {
        it('should correctly add two numbers', () => {
            const sum = 5 + 3;
            expect(sum).to.equal(8);
        });

        it('should correctly subtract two numbers', () => {
            const difference = 9 - 4;
            expect(difference).to.equal(5);
        });

        it('should correctly multiply two numbers', () => {
            const product = 7 * 6;
            expect(product).to.equal(42);
        });

        it('should correctly divide two numbers', () => {
            const quotient = 8 / 2;
            expect(quotient).to.equal(4);
        });
    });

    describe('String Manipulations', () => {
        it('should correctly concatenate two strings', () => {
            const result = 'Hello' + ' ' + 'World';
            expect(result).to.equal('Hello World');
        });

        it('should return string length', () => {
            const str = 'OpenAI';
            expect(str.length).to.equal(6);
        });

        it('should convert string to uppercase', () => {
            const str = 'chai';
            expect(str.toUpperCase()).to.equal('CHAI');
        });
    });
});
