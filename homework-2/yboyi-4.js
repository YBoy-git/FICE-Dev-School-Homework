const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function unpackSausages(truck) {
    const packages = [];

    // there are(?) sausages in packages in boxes in the truck
    truck.forEach((box) => {
        box.forEach((package) => {
            packages.push(package);
        });
    });
    console.log(packages);

    // checking their sausages
    const sausages = [];
    for (let i = 0; i < packages.length; i++) {
        if (/^\[(\S)\1{3}\]$/.test(packages[i])) {
            sausages.push(packages[i]);
        }
    }

    // every 5th sausage pack must be eaten
    for (let i = sausages.length - 1; i >= 0; i--) {
        if ((i + 1) % 5 === 0) {
            sausages.splice(i, 1);
        }
    }

    // lining up their sausages
    return sausages.map(box => box.slice(1, -1).split("").join(" ")).join(" ");
}

rl.question("Enter boxes from a truck: ", (input) => {
    const arr = JSON.parse(input);
    console.log(unpackSausages(arr));
    rl.close();
}
);
