##                             Course Project 
###          Unit testing under mocha framework and with chai assertion library

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
    
##### Installation 
   - Install the node.js LTS version from Node website, npm gets installed along with node 
   automatically.
   - Check the successful installation of node and npm by running the following in the command line:
   
    npm -v     // will return installed npm version
    node -v    // will return installed node version

 
##### Click below and open the sample functions (units) and tests for them:

* [Functions](index.js)
* [Tests](test/index.spec.js)
