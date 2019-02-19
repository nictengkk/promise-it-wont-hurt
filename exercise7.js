Exercise 7 Promise after promise

//onFulfill is a function which calls the second function with the output "value" of the first() function. This value will be the output of the first function. OnFulfilled is the handler used to handle the output of the promise returned after first function was called.
const onFulfilled = value => {
  return second(value);
};

first() //calls the first function
  .then(onFulfilled) //handler used to handle the output of the first promise, which is a callback function second() using the output value from the first() function as its input value.
  .then(console.log); //prints the output message on the console.
