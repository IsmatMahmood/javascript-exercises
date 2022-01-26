const fibonacci = function (nth) {
    if (nth < 1) {
        return "OOPS";
    }
    let sequence = [1, 1];
    for (i = 1; i < nth - 1; i++) {
        sequence.push(sequence[i - 1] + sequence[i]);
    }
    return sequence[nth - 1];
};

// Do not edit below this line
module.exports = fibonacci;
