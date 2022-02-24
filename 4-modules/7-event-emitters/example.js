const EventEmitter = require("events");

const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit("TEST_EVENT");
  // allows the emit to happen on the next round of the event loop
});

myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});
myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});
myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});

// myEmitter.emit("TEST_EVENT");

// Streams are Event Emitters
// process.stdin, process.stdout
