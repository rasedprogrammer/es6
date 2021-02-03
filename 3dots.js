const array = [23, 23, 34, 42, 42, 24, 42];
const array2 = [23, 42, 42, 42];
const array3 = [23, 34, 42, 24, 41, 22, ];
const allArray = array.concat(array2).concat([5]).concat(array3); //This is a normal virsion array with concatenate
const allArray2 = [...array, ...array2, ...array3];
// console.log(allArray2);

const x = 650;
const y = 500;
const z = 400;
const xy = [860, 590, 720, 900];
const xyz = Math.max(x, y, z);
const ab = Math.max(...xy);


console.log(ab);