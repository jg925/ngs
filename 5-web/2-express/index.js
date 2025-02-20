const express = require("express"); // this is a function

const server = express();

server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.get("/about", (req, res) => {
  res.send("About...");
});

server.listen(4242, () => {
  console.log("Express Server is running...");
});
