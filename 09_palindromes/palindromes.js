const palindromes = function (str) {
    const regex = /[^a-zA-Z]/gi;
    let string = str.replace(regex, "").toLowerCase();
    return string == string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
