//Exercise 9 Throws an error

//JSON.parse method parses a JSON string, and returns a JSON object.

const parsePromised = new Promise((fulfill, reject) => {
  try {
    fulfill(JSON.parse(process.argv[2]));
  } catch (error) {
    //there has to be an error to catch to reject the error.
    reject(error.message);
  }
});

parsePromised.then(null, console.log);
//if the JSON obj string is valid, it will be fulfilled. if the JSON obj string is invalid, it will throw up the error.
