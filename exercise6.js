Exercise 6 Shortcuts using Promise APIs

const promise = Promise.resolve("FULFILLED");

const rejectedPromise = Promise.reject("REJECTED");

const error = console.error("There is an error!");
rejectedPromise.catch(error);
