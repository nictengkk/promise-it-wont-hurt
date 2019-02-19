//Exercise 13

const FS = require("q-io/http");

const receivedData = json => {
  return JSON.parse(json);
};

return FS.read(`http://localhost:1337`)
  .then(receivedData)
  .then(console.log);
