const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findNb(n) {
  let m = 0;
  while (n > 0) {
    m++;
    n -= Math.pow(m, 3);
  }
  return n == 0 ? m : -1;
}

rl.question("Enter pile volume: ", (input) => {
  console.log(findNb(input));
  rl.close();
});
