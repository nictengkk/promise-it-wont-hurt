Exercise 3 Rejecting a Promise

const promise = new Promise(function(fulfill, reject) {
  const timer = 300;
  const error = new Error("REJECTED!");
  setTimeout(() => {
    reject(error);
  }, timer);
});

const onReject = error => {
  console.log(error.message);
};

promise.then(null, onReject);
