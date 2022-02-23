const theOneFunc = (delay) => {
  console.log(`Hello after ${delay} seconds.`);
};

const delays = [4, 8];
delays.forEach((d) => {
  setTimeout(theOneFunc, d * 1000, d);
});

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
