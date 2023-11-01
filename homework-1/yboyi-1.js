const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function get3And5MultiplesSum(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

rl.question("Enter a number: ", (input) => {
  console.log(get3And5MultiplesSum(input));
  rl.close();
});
