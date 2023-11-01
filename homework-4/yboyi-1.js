function VigenèreCipher(key, abc) {

    const normalizeSymbol = function (index) {
        return (index + abc.length) % abc.length;
    }

    this.encode = function (str) {
        return str.split("").map((char, index) => {
            const charIndex = abc.indexOf(char);
            if (charIndex != -1) {
                return abc[normalizeSymbol(charIndex + abc.indexOf(key[index % key.length]))];
            }
            return char;
        }).join("");
    };

    this.decode = function (str) {
        return str.split("").map((char, index) => {
            const charIndex = abc.indexOf(char);
            if (charIndex != -1) {
                return abc[normalizeSymbol(charIndex - abc.indexOf(key[index % key.length]))];
            }
            return char;
        }).join("");
    };
}
