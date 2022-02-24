const fs = require("fs");

const data = fs.readFileSync(__filename); //synchronous version of readFile

console.log("File data is", data);

console.log("TEST");
