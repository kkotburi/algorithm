const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (n) {
    let isOdd = n % 2 ? "odd" : "even";
    console.log(`${n} is ${isOdd}`);
  });