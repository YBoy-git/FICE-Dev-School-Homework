const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function codewarsCouncil(honors, d) {
    const n = honors.length;
    const points = new Array(n / d).fill(0);

    for (let i = 0; i < n; i++) {
        points[i % (n / d)] += honors[i];
    }
    return Math.max(...points);
}

rl.question(
    "Input format: honors d\nExample: 1,2,3 3\nEnter honors and day of month: ",
    (input) => {
        let [honors, d] = input.split(" ");
        honors = honors.split(",").map((honor) => parseInt(honor));
        d = parseInt(d);

        console.log(codewarsCouncil(honors, d));
        rl.close();
    }
);
