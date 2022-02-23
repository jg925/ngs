// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

c = 0;
const helloInterval = setInterval(() => {
  if (c < 5) {
    console.log("Hello World");
  } else {
    console.log("Done");
    clearInterval(helloInterval);
  }
  c++;
}, 1000);
