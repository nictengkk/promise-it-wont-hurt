Exercise 8 Values and promises

//creating attachTitle function/handler and prepending DR. to its first argument
const attachTitle = data => {
  return "DR. " + data;
};

//create a fulfilled promise with a value of "MANHATTAN"
const fulfilled = Promise.resolve("MANHATTAN");

//Building a promise chain - data from fulfilled promise will be passed into the handler attachTitle and which will subsequently be printed on the console log.
fulfilled.then(attachTitle).then(console.log);
