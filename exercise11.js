const all = (arg1, arg2) => {
  let counter = 0;
  const combinedPromise = new Promise(function(resolve, reject) {
    const data = []; //an empty array needs to be created to push both values
    const onFulfilled = value => {
      //callback function which runs asynchronously
      counter++;
      data.push(value);
      if (counter === 2) {
        resolve(data); //when resolve(data) is rendered, all codes below will not longer be executed, hence pushing of values into array have to be done before this step. When counter reaches 2, Promise is resolved/fulfilled with an argument data, which is an array created with each output value provided by the respective Promise, and pushed into said array.
      }
    };
    arg1.then(onFulfilled); //.then() always takes in a callback function to process the promise and to return a value.
    arg2.then(onFulfilled);
  });
  return combinedPromise;
};

all(getPromise1(), getPromise2()).then(console.log);
