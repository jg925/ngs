const fs = require("fs");

fs.readFile(__filename, function cb(err, data) {
  //async functions wait for all synchronous tasks to finish
  console.log("File data is", data);
});

console.log("TEST");
