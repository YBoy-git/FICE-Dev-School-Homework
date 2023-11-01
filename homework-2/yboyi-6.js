const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculatePerimeter(map) {
    let perimeter = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === "X") {
                if (i === 0                 || map[i - 1][j] === "O") perimeter++; // up
                if (i === map.length - 1    || map[i + 1][j] === "O") perimeter++; // down
                if (j === 0                 || map[i][j - 1] === "O") perimeter++; // left
                if (j === map[i].length - 1 || map[i][j + 1] === "O") perimeter++; // right
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}

rl.question("Enter islands\nExample: OXXOX,OXXOX,XXOXX,XOXXX,XOOXX\n", (input) => {
    const map = input.split(",");
    console.log(map.join("\n"));
    console.log(calculatePerimeter(map));
    rl.close();
}
);
