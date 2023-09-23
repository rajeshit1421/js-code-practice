const str = "rajjeshraa";
let counter = 1;
let newString = str.split("").sort().join();
for (let j = 0; j < str.length; j++) {
  const element = str[j];
  //console.log(newString[j] + " " + newString[j + 1]);
}
//console.log(newString);
// let strArr = [];
// console.log(str.length, "---->");
// for (let i = 0; i < str.length; i++) {
//   if (newString[i] == newString[i + 1]) {
//     counter++;
//   } else {
//     console.log(newString[i] + " " + counter);
//     counter = 1;
//   }
// }
//console.log(counter);

const string = "The quick brown fox jumps over the lazy dog";
console.log(string.indexOf("jumps"));
