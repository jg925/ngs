const path = require("path");
const fs = require("fs");

//const files = ["./1-loop.js", "./2-try.js"];
const files = [".bash_profile", ".npmrc"];

files.forEach((file) => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath);
  console.log("File data is", data);
});
