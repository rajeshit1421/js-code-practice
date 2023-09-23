const myArr = ["time", "test", "data"];
const arr_two = ["rajesh", "vivek", "tom"];

const newArr = [...myArr, ...arr_two];
const arr = [1, 2, [1, 5], 8, [9, 7]];
const realArr = arr.flat(2);
//console.log(realArr);

let a = 5;
let b = 6;
let c = 9;
console.log(Array.of(a, b, c));
