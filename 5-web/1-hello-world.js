const http = require("http");

const requestListener = (req, res) => {
  // res.end("Hello World\n"); //end is the same as write + end
  console.dir(res, { depth: 0 });
  res.write("Hello World\n");
  res.end(); // must end the session
};

// const server = http.createServer(requestListener); // this is an event emitter
const server = http.createServer(); // this is an event emitter
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});
