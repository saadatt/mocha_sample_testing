##                             Course Project 
###               Unit testing under mocha framework with a use of chai assertion library

#### Introduction
 
   The test-driven development (TDD) is one of the major ways to create a software application that is 
   less error-prone, more predictable and resilient to changes. 
   
   Just as with other programming languages, JavaScript has several tools and frameworks that 
   make TDD possible on Node.js and also in the browser, such as: Jest, Jasmine, Mocha, QUnit, 
   Karma, Cypress, and several others. 
   
   If one aims to create a test for any function, then she needs to check that the function by itself, 
   separate from everything around, returns what it is intended to do and mock the rest of the things 
   which are not under test. Essentially, that is the purpose of a unit test. The Unit testing is 
   testing of the smallest parts of an application, units, to check whether they fit for use or not. 
   
   This project is an attempt to show how Mocha and Chai can be used for testing the functions 
   (or features) below by feeding them an input and examining the output. In other words, it is 
   an attempt to test coding functionality written in JavaScript, using node.js framework. 
   The project starts from writing my own test suites that is followed by actual test-running 
   by use of pre-installed Mocha and chai packages.
    
##### Package Installation Guide

   - Install the node.js LTS version from Node website, npm gets installed along with node 
   automatically.
   - Check the successful installation of node and npm by running the following in the command line:
   
    npm -v     // will return installed npm version
    node -v    // will return installed node version
    
    npm install --global mocha
    npm install --save-dev mocha
    
Note: 
 - global helps to install the Mocha on computer at global level which helps to run mocha test through
  command line;
 - save-dev helps to add the mocha as dependency in package.json file for that particular project.

##### How the test actually works

   The following two constant variables have to be declared:

    const assert = require('assert');
    const {expect} = require('chai');
       
   In order to test the function, it has to be called from the index.spec.js file after its name is 
   exported from index.js and declared (i.e. imported to) the index.spec.file as it is shown below:
    
    const {sortArrayAscend, isOdd} = require('../index.js');
    
   ##### describe()
   is a function which holds the collection of tests. It has the following generic construction:
   describe( 'name of the test', () => {
    it ( 'name of expected result', () => {
    expect (function(input)).to.equal(output);
    })
 
 The example below shows the describe function that uses expect().deep.equal() form:
   
    describe('sortArrayAscendTest', () => {
    it('sortArrayAscend is expected to be equal [1, 2, 5, 6, 10, 160]', () => {
    expect(sortArrayAscend([10, 5])).deep.equal([5, 10]);
     });
 The next example shows the same form but for the primitive type of data: 
     
    describe('letterRepeatTest', () => {
    it('letterRepeat is expected to be equal to "aabbccdd"', () => {
    expect(letterRepeat('abcd')).to.equal('aabbccdd');
    });
    
   It takes two parameters, first one is the name to the tests' functionality and second one is 
   the function that is called from the index.js folder and in turn, contains one or multiple tests. 
   
   #####  ... expect().to.equal()  
   is a generic construction that essentially validates the output or task of the function.
   
![](img/pic_mocha_proj.jpg)
##### Functions (units) and tests for them that were implemented within this Project
   
   The following nine functions (units) were tested in this Project:
   -  function that sorts out a given array in ascending order, sortArrayAscend();
   
   -  function that checks whether a word is a palindrome, isPalindrome();
   
   - Function that checks whether an integer is odd, isOdd();
   
   - Function that validates whether an integer is even, isEven();
   
  -  Function that validates whether a person is an adult, isAdult(num);

   - Function that returns the credit card number masked with '#' symbol, protecting();
   
   - Function that checks whether the string ends with the given ending, isEnding();

   - Function that returns the square root of an integer, squareRoot();

   - Given a string, the Function letterRepeat() returns a string in which each character 
     (case-sensitive) is repeated once;

##### Attachment

* [Functions](index.js)

* [Tests](test/index.spec.js)
