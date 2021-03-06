"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var operator = readline_sync_1.question('Enter operator:\n');
    var secondStr = readline_sync_1.question('Enter second number:\n');
    var firstNum = isNumber(firstStr);
    var op = isOperator(operator);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum_1 = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum_1, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\nInvalid Input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
;
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
