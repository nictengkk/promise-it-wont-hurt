Exercise 1

'use strict'; //evaluates code in safe mode, prevents use of undeclared variables. Node by default runs all code in strict mode.

const printString = () => {
  setTimeout(() => {
    console.log("TIMED OUT!");
  }, 300);
};

printString();
