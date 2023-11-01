const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function towerOfHanoiMinTurns(disks) {
  return Math.pow(2, disks) - 1;
}

rl.question("Enter number of disks: ", (input) => {
  console.log(towerOfHanoiMinTurns(input));
  rl.close();
});
