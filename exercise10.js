//Exercise 10 An important rule

const alwaysThrows = () => {
  throw new Error("OH NOES");
};

const iterate = num => {
  console.log(num);
  return num + 1;
};

const newPromise = Promise.resolve(iterate(1));

//always remember it is an error obj (output from promise when rejected) and console.log error.message.
const onReject = error => {
  console.log(error.message);
};

newPromise
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject);
