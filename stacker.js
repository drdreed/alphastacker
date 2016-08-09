var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

(function stackLetters() {
    var finalStr = "";
    for (var x = 0; x < alphabet.length; x++) {
        finalStr += alphabet[x];
        console.log(finalStr);
    }

    finalStr = "";
    for (var x = 0; x < alphabet.length; x++) {
        if ((x+1) % 5 === 0) {
            finalStr += alphabet[x] + " ";
        } else {
            finalStr += alphabet[x];
        }
        console.log(finalStr);
    }
})();
