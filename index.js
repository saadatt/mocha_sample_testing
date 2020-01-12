//function that sorts out a given array in ascending order
function sortArrayAscend(arr) {
  return arr.sort((a, b) => a - b);
}

//function that checks if a word is a palindrome
function isPalindrome(str) {
  return str.toLowerCase().split('').reverse('').join('') === str.toLowerCase();
}

//Function that checks if an integer is odd 
function isOdd(num) {
  return  num % 2 !== 0;
}

//function that checks if an integer is even
function isEven(num) {
  if (num % 2 === 0) return true;
}

//function that checks if a person is an adult
function isAdult(num) {
  if (num < 0) {
    return 'not born yet';
  } else if (num >= 21) {
    return 'true';
  } return 'false';
}

//CREDIT CARD MASK: Imagine that you are making a purchase online and entering your credit card number into the
// required empty field. While you are doing so, you notice that the all of the digits
// of your credit card number except the last four, appear masked with '#'. Your task now is to write a function
// to maskify credit card numbers of other people by changing all but the last four characters into '#'.

function protecting(ccnum) {
  if (ccnum === '') { return '';}
  if (ccnum.length <= 4) {return ccnum;}
  let a = ccnum.slice(ccnum.length-4, ccnum.length);
  let c = '#';
  return c.repeat(ccnum.length - 4) + a;
}

// function that checks if the string ends with the given ending
function isEnding(str, ending){
  return str.endsWith(ending);
}

//function that returns the square root of an integer
function squareRoot(n) {
  if (n < 0) {return 'NaN';}
  return Math.sqrt(n);
}

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once
function letterRepeat(str) {
  let b =[], a;
  a = str.split('');
  for (let i=0; i < a.length; i++){
    b.push(a[i] + a [i]);
  } return b.join('');
}

module.exports = {letterRepeat, sortArrayAscend, squareRoot, protecting, isEnding, isPalindrome, isOdd, isEven, isAdult};




