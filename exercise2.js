//Exercise 2

("use strict");

const promise = new Promise(function(fulfill, reject) {
  const timer = 300;
  setTimeout(() => {
    fulfill("FULFILLED!"); //value provided here will become the output of this promise, to be the input for the next promise.
  }, timer); //after timer 300ms, fulfill will be called.
});

//this is the callback handler which will take the output from the promise (data) and prints in on the console.
const onFulfilled = data => {
  console.log(data);
};
// Your solution here

//promise.then(console.log)
promise.then(onFulfilled);
