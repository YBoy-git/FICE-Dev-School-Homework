const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function highAndLow(input) {
  const array = input.split(" ");
  return Math.max(...array).toString() + ' ' + Math.min(...array).toString();
}

rl.question("Enter numbers: ", (input) => {
  console.log(highAndLow(input));
  rl.close();
});
