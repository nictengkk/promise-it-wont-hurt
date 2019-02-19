Exercise 4 To reject or not to reject

("use strict");

const promise = new Promise(function(fulfill, reject) {
  const error = new Error("I DID NOT FIRE");
  fulfill("I FIRED");
  reject(error);
});

const onRejected = error => {
  console.log(error.message);
};

promise.then(console.log, onRejected); //fulfill will happen first, hence "I FIRED" will be printed on the console. The second state "reject" will no longer be rendered.
