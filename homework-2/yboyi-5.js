const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getRootProperty(object, value) {
    const roots = Object.keys(object);
    for (const root of roots) {
        if (Array.isArray(object[root])) {
            if (object[root].includes(value)) {
                return root;
            }
        }
        if (typeof object[root] === "object") {
            const result = getRootProperty(object[root], value);
            if (result) {
                return root;
            }
        }
    }
    return null;
}

rl.question("Enter an object -> value to find\n", (input) => {
    let [object, value] = input.split("->");
    object = JSON.parse(object);
    value = parseInt(value);
    console.log(getRootProperty(object, value));
    rl.close();
}
);
// {
//     "r1n": {
//         "mkg": {
//             "zma": [21, 45, 66, 111],
//             "mii": {
//                 "ltf": [2, 5, 3, 9, 21]
//             },
//             "fv": [1, 3, 6, 9]
//         },
//         "rmk": {
//             "amr": [50, 50, 100, 150, 250]
//         }
//     },
//     "fik": {
//         "er": [592, 92, 32, 13],
//         "gp": [12, 34, 116, 29]
//     }
// }