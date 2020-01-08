function sortArrayAscend(arr) {
    return arr.sort((a, b) => a - b);
    }

function isPalindrome(str) {
    return str.toLowerCase().split("").reverse("").join("") === str.toLowerCase();
    }

function isOdd(num) {
    return num % 2 === 1
    }

function isEven(num) {
    return num % 2 === 0;
    }

function isAdult(num) {
    if (num < 0) {
        return 'not born yet';
    } else if (num >= 21) {
        return 'true';
    } return 'false';
    }

module.exports = {sortArrayAscend, isPalindrome, isOdd, isEven, isAdult};




