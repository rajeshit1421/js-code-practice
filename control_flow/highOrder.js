const myArr = [1, 2, 3, 4];
let resData = [];
const res = myArr.filter((item, index) => {
  //console.log(item, index);
  return item > 5;
});

const result = myArr.forEach((item) => {
  return resData.push(item);
});

const resMap = myArr.map((item) => {
  return item;
});

const resreduce = myArr.reduce((acc, currval) => {
  console.log(`acc : ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(resreduce);
