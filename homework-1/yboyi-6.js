const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function descendingOrder(number) {
  if (number < 0) return -1;
  number = number.toString();
  const array = number.split("").map(value => parseInt(value));
  
  // sorting digits
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {

      // find the place, where the target digit will be smaller than every digit on the left
      let j = i - 1;
      while (array[j] < array[i] && j >= 0) { j--; }
      j++;

      // move the target digit to its place
      array.splice(j, 0, array[i]);
      array.splice(i + 1, 1);
    }
  }
  
  return parseInt(array.join(""));
}

rl.question("Enter a number: ", (input) => {
  console.log(descendingOrder(parseInt(input)));
  rl.close();
});
