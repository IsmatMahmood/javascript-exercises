const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	let sum = 0;
  for (i = 0; i< numArr.length; i++){
    sum += numArr[i];
  }
  return sum;
};

const multiply = function(numArr) {
  let sum = numArr[0];
  for (i = 1; i< numArr.length; i++){
    sum *= numArr[i];
  }
  return sum;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  if (num == 0 || num == 1)
    return 1;
  else
  {
    let fact = num * (num- 1);
    num--;
    while (num > 1){
      fact = fact * (num - 1);
      num--;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
