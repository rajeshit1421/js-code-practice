let arr = [1, 2, 3, 4, 5, 6, 7];
let magicSeven = [];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  for (let j = 0; j < arr.length; j++) {
    const elementJ = arr[j];
    //console.log(element + elementJ == 7);
    if (elementJ + element == 7) {
      magicSeven.push([elementJ, element]);
    }
  }
}
//console.log(magicSeven);

for (let j = 0; j < arr.length; j++) {
  const element = arr[j];
  console.log(element, arr[j] + 1);
  // console.log();
}
