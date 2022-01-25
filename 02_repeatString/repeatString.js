const repeatString = function (string, num) {
    let repeats = "";

    if (num === 0) {
        return repeats;
    }
    else if (num < 0) {
        return "ERROR"
    }
    else {
        while (num != 0) {
            repeats = repeats + string;
            num--;
        }
        return repeats;
    }
};

// Do not edit below this line
module.exports = repeatString;
