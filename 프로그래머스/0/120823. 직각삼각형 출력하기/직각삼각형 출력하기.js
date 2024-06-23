const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  answer = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    answer.push(star);
  }
}).on("close", function () {
  console.log(answer.join("\n"));
});
