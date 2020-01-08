const assert = require('assert');
const {sortArrayAscend, isPalindrome, isOdd, isEven, isAdult} = require('../index.js');

describe('sortArrayAscendTest', () => {
    it('sortArrayAscend is expected to be equal [1, 2, 5, 6, 10, 160]', () => {
        assert.deepEqual(sortArrayAscend([10, 5]), [5, 10]);
    });
    it('sortArrayAscend is expected to be equal [1, 2, 3, 5, 8, 28, 34, 45, 98, 549, 567, 738]', () => {
        assert.deepEqual(sortArrayAscend([1, 28, 3, 549, 98, 45, 34, 2, 8, 567, 738, 5]), [1, 2, 3, 5, 8, 28, 34, 45, 98, 549, 567, 738]);
    });
    it('sortArrayAscend is expected to be equal [2, 4, 6, 8, 10]', () => {
        assert.deepEqual(sortArrayAscend([10, 8, 6, 4, 2]), [2, 4, 6, 8, 10]);
    });
    it('sortArrayAscend is expected to be equal [23, 45, 8787, 78883, 9000003, 67234566789]', () => {
        assert.deepEqual(sortArrayAscend([67234566789, 9000003, 45, 78883, 8787, 23]), [23, 45, 8787, 78883, 9000003, 67234566789]);
    });
    it('sortArrayAscend is expected to be equal [-28, -8, 0, 1, 2, 3, 5, 34, 98, 549, 567, 738]', () => {
        assert.deepEqual(sortArrayAscend([1, -28, 3, 549, 98, 0, 34, 2, -8, 567, 738, 5]), [-28, -8, 0, 1, 2, 3, 5, 34, 98, 549, 567, 738]);
    });
    it('sortArrayAscend is expected to be equal [-9000003, 23, 45, 8787, 78883, 67234566789]', () => {
        assert.deepEqual(sortArrayAscend([67234566789, -9000003, 45, 78883, 8787, 23]), [-9000003, 23, 45, 8787, 78883, 67234566789]);
    });
    it('sortArrayAscend is expected to be equal  [-28.56, 0, 0.3, 1.1, 2, 3.1, 5.4, 34.2, 549.4, 738.9]', () => {
        assert.deepEqual(sortArrayAscend([1.1, -28.56, 3.1, 549.4, 0, 0.3, 34.2, 2, 738.9, 5.4]), [-28.56, 0, 0.3, 1.1, 2, 3.1, 5.4, 34.2, 549.4, 738.9]);
    });
});

describe('isPalindromeTest', () => {
    it('isPalindrom is expected to be equal true', () => {
        assert.equal(isPalindrome('wow'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('radar'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('noon'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('TooBadIHidABoot'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('SomeMenInterpretNineMemos'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('NormaIsAsSelflessAsIamRon'), true);
    });
    it('isPalindrome is expected to be equal true', () => {
        assert.equal(isPalindrome('kayak'), true);
    });
});

describe('isOddTest', () => {
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(9), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(15), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(477), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(801), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(987676761), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(859659989607), true);
    });
    it('isOdd is expected to be equal true', () => {
        assert.equal(isOdd(3), true);
    });
});

describe('isEvenTest', () => {
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(8), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(10), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(0), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(100), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(102), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(2), true);
    });
    it('isEven is expected to be equal true', () => {
        assert.equal(isEven(14), true);
    });
});


describe('isAdultTest', () => {
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(76), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(50), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(30), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(22), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(21), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
        assert.equal(isAdult(22), 'true');
    });
    it('isAdult is expected to be equal "true"', () => {
            assert.equal(isAdult(30), 'true');
    })
});