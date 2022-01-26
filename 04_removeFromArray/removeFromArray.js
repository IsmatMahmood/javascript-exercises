const removeFromArray = function (arr, ...args) {
    let argsArr = Array.from(args);
    for (i = 0; i < argsArr.length; i++) {
        arr = arr.filter(x => x !== argsArr[i])
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
