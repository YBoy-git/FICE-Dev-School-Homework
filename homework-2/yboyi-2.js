const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function findBalance(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const left = arr.slice(0, i).reduce((a, b) => a + b, 0);
        const right = arr.slice(i + 1, length).reduce((a, b) => a + b, 0);
        if (left === right) {
            return i;
        }
    }
    return -1;
}

rl.question("Enter an array like 1,2,3,4,5: ", (input) => {
    const arr = input.split(",").map((el) => parseInt(el));
    console.log(findBalance(arr));
    rl.close();
}
);
