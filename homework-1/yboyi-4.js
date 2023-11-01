const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

rl.question("Enter a number: ", (input) => {
  console.log(isPrime(input));
  rl.close();
});
