const caesar = function (str, moves) {
    let newStr = "";

    if (moves < -26 || moves > 26) { //negate large shift moves
        moves = moves % 26;
    }

    for (i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        if (!(char >= 65 && char <= 90) && // condition to check if it is a non-letter character.
            !(char >= 97 && char <= 122)) {
            newStr = newStr + str[i]; // add the non-letter character to the new string.
        }

        // decided to break the code down to deal with upper and lower case letters seperately for ease of
        // reading but also to make it easier to deal with shift moves which could mean that an uppercase letter after the move could go into the lower case region.

        if (char >= 65 && char <= 90) { //uppercase letter
            let newChar = char + moves; // get new position
            if ((newChar >= 65) &&
                (newChar <= 90)) {
                newStr = newStr + String.fromCharCode(newChar)
            }
            else if (moves < 0) {
                newChar = newChar + 26;
                newStr = newStr + String.fromCharCode(newChar)
            }
            else if (newChar > 90) {
                newChar = newChar - 26;
                newStr = newStr + String.fromCharCode(newChar)
            }
        }
        if (char >= 97 && char <= 122) { //lowercase letter
            let newChar = char + moves; // get new position
            if ((newChar >= 97) &&
                (newChar <= 122)) {
                newStr = newStr + String.fromCharCode(newChar)
            }
            else if (moves < 0) {
                newChar = newChar + 26;
                newStr = newStr + String.fromCharCode(newChar)
            }
            else if (newChar > 122) {
                newChar = newChar - 26;
                newStr = newStr + String.fromCharCode(newChar)
            }
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
