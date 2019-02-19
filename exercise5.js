Exercise 5 Always asynchronous

("use strict");

const promise = new Promise(function(fulfill, reject) {
  fulfill("PROMISE VALUE"); //promise will immediately change from pending mode to fulfilled mode after this line is run
});

//output of the fulfilled promise (promise value) will be the input (message) for the handler onFulfilled.
const onFulfilled = message => {
  console.log(message);
};

promise.then(onFulfilled, null); //onFulfilled will log the message (Promise Value) only later because it is a asynchronous function, which

console.log("MAIN PROGRAM");
