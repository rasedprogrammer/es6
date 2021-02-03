// function doubleIt(num) {
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function myfun(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num * 2;
const addNumber = (num1, num2) => num1 * num2;
const blankParameter = () => 10;
const doMate = (x, y) => {
    const divite = x / y;
    const multi = x * y;
    const result = divite + multi;
    return result;
}

const result3 = doMate(40, 160);
const result2 = blankParameter();
const result = addNumber(58, 2);
console.log(result3);