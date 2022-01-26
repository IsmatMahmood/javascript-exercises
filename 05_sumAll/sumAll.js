const sumAll = function(num1, num2) {
    let tmp = 0;
    let sum = 0;
    if (Number(num1) !== num1 || Number(num2) !== num2 || num1 < 0 || num2 < 0)
        return "ERROR";
    else if (num1 > num2)
    {
        tmp = num1;
        num1 = num2;
        num2 = tmp;
    }

    for (i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
