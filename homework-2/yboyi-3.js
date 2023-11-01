const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function groupAnagrams(words) {
    const anagrams = {};
    const length = words.length;
    for (let i = 0; i < length; i++) {
        const word = words[i];
        const sorted = word.split("").sort().join("");
        if (anagrams[sorted] === undefined) {
            anagrams[sorted] = [word];
        }
        else {
            anagrams[sorted].push(word);
        }
    }
    return Object.values(anagrams);
}

rl.question("Enter words separated by spaces\n", (input) => {
    const arr = input.split(" ");
    console.log(groupAnagrams(arr));
    rl.close();
}
);
