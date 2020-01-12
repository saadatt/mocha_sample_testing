const assert = require('assert');
const {expect} = require('chai');
const {letterRepeat, sortArrayAscend, squareRoot, isEnding, protecting, isPalindrome, isOdd, isEven, isAdult} = require('../index.js');

describe('sortArrayAscendTest', () => {
  it('sortArrayAscend is expected to be equal [1, 2, 5, 6, 10, 160]', () => {
    expect(sortArrayAscend([10, 5])).deep.equal([5, 10]);
  });
  it('sortArrayAscend is expected to be equal [1, 2, 3, 5, 8, 28, 34, 45, 98, 549, 567, 738]', () => {
    expect(sortArrayAscend([1, 28, 3, 549, 98, 45, 34, 2, 8, 567, 738, 5])).deep.equal([1, 2, 3, 5, 8, 28, 34, 45, 98, 549, 567, 738]);
  });
  // array containing negative numbers
  it('sortArrayAscend is expected to be equal [-10, 2, 4, 6, 8]', () => {
    expect(sortArrayAscend([-10, 8, 6, 4, 2])).deep.equal([-10, 2, 4, 6, 8]);
  });
  //array of only one element
  it('sortArrayAscend is expected to be equal [1]', () => {
    expect(sortArrayAscend([1])).deep.equal([1]);
  });
  it('sortArrayAscend is expected to be equal [-9000003, 0, 23, 45, 8787, 78883]', () => {
    expect(sortArrayAscend([0, -9000003, 45, 78883, 8787, 23])).deep.equal([-9000003, 0, 23, 45, 8787, 78883]);
  });
  //array containing decimals
  it('sortArrayAscend is expected to be equal  [-28.56, 0, 0.3, 1.1, 2, 3.1, 5.4, 34.2, 549.4, 738.9]', () => {
    expect(sortArrayAscend([1.1, -28.56, 3.1, 549.4, 0, 0.3, 34.2, 2, 738.9, 5.4])).deep.equal([-28.56, 0, 0.3, 1.1, 2, 3.1, 5.4, 34.2, 549.4, 738.9]);
  });
});

// Credit Card Protection function that masks all digits except the last four; should return a string, not a number
describe('protectingTest', () => {
  it('protecting(num) expected to be a "5616"', () => {
    expect(protecting('4556364607935616')).to.be.a('string');
  });
  //should return a string
  it('expected to be equal "45"', () => {
    expect(protecting('45')).to.be.a('string');
  });
  //should mask NOT the first four digits, but the last four
  it('expected to not to be equal "####3646078793522"', () => {
    expect(protecting('45563646078793522')).to.not.to.be.equal('####3646078793522');
  });
  //should not return a number, but a string
  it('expected to be a string "455636460793####"', () => {
    expect(protecting('4556364607937777')).to.not.to.be.a('number');
  });
  it('expected to be equal "###########8789"', () => {
    expect(protecting('458768746698789')).to.not.to.be.a('number');
  });
});

// Ending of a string
describe('isEndingTest', () => {
  it('isEnding is expected to be true', () => {
    expect(isEnding('coffee', 'ee')).to.true;
  });
  it('isEnding is expected to be false', () => {
    expect(isEnding('theory', 'yy')).to.be.false;
  });
  it('isEnding is expected to be true', () => {
    expect(isEnding('Monday', 'day')).true;
  });
  it('isEnding is expected to be true', () => {
    expect(isEnding('housewife', 'wipe')).false;
  });
});

//Palindrome
describe('isPalindromeTest', () => {
  it('isPalindrom is expected to be true', () => {
    expect(isPalindrome('&5g')).to.be.false;
  });
  it('isPalindrome is expected to be true', () => {
    expect(isPalindrome('radAr')).to.be.true;
  });
  it('isPalindrome is expected to be true', () => {
    expect(isPalindrome('NoON')).to.be.true;
  });
  it('isPalindrome is expected to be false', () => {
    expect(isPalindrome('LoveIsLove')).to.be.false;
  });
  it('isPalindrome is expected to be equal true', () => {
    expect(isPalindrome('AllMenInterpretNineMemos')).to.false;
  });
  it('isPalindrome is expected to be equal true', () => {
    expect(isPalindrome('NormaIsAsSelflessAsIamRon')).to.true;
  });
});


// Square root of a number;
describe('square root of a number test', () => {
  it('squareRoot of 4 is expected to be equal 2', () => {
    expect(squareRoot(4)).to.be.equal(2);
  });
  it('squareRoot of -4 is expected to equal to NaN', () => {
    expect(squareRoot(-4)).to.be.equal('NaN');
  });
  it('squareRoot of 0 is expected to equal 0', () => {
    expect(squareRoot(0)).to.be.equal(0);
  });
});

// //is Even function test
// describe('isEvenTest ', () => {
//   it('IsEven throws an error if 10 is false ', () => {
//     expect((!isEven(10)).to.throw(TypeError,'10 should be even!'));
//   });
// });

//Testing Functions with assert
describe('isOddTest', () => {
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(9)).to.equal(true);
  });
  it('isOdd is expected to be equal true', () => {
    assert.notEqual(isOdd(9), false);
  });
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(477)).to.equal(true);
  });
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(801)).to.not.equal( false);
  });
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(0)).to.equal( false);
  });
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(-859659989600)).to.equal( false);
  });
  it('isOdd is expected to be equal true', () => {
    expect(isOdd(-3)).to.not.equal( false);
  });
});

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once
describe('letterRepeatTest', () => {
  it('letterRepeat is expected to be equal to "aabbccdd"', () => {
    expect(letterRepeat('abcd')).to.equal('aabbccdd');
  });
  it('letterRepeat is expected to be equal to "EEaarrtthh"', () => {
    expect(letterRepeat('Earth')).to.equal('EEaarrtthh');
  });
  it('letterRepeat is expected to be equal to "11223344556677"', () => {
    expect(letterRepeat('1234567')).to.equal('11223344556677');
  });
  it('letterRepeat is expected to be equal to "%%^^&&**(("', () => {
    expect(letterRepeat('%^&*(')).to.equal('%%^^&&**((');
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
  });
});