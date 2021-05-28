"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var operator = readline_sync_1.question('Enter operator:\n');
    var secondStr = readline_sync_1.question('Enter second number:\n');
    var firstNum = isNumber(firstStr);
    console.log(firstNum);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
