function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));

function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract(1, 2));

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(1, 2));

function divide(num1, num2) {
    return num1/num2;
}
console.log(divide(4, 2));

function increment(num) {
    return num += 1;
}
console.log(increment(5));

function decrement(num) {
    return num -= 1;
}
console.log(decrement(5));

function makeInt(string, base) {
    return parseInt(string, 10);
}
console.log(makeInt("10"));

function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(parseDecimal("10.1234"));