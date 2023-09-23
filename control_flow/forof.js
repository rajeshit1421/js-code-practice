const arr = [1, 2, 3, 4, 5, 6, 7];

for (const val of arr) {
  //console.log(val);
}

const a = new Array("rajesh", "vijay", "ajay");
//console.log(a);

const myObject = { a: 1, b: 2, c: 3 };

for (const [key, val] of Object.entries(myObject)) {
  console.log(key, val);
}
console.log("Rajesh");

const setTimeOutFunc = setTimeout(() => {
  console.log("SettimeOut call here");
}, 1000);

function callFun() {
  setTimeOutFunc;
}
callFun();
console.log("30");
console.log("Kanpur");

const fruits = {
  subject: ["JS", "Java", "PHP", "CPP"],
};

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
for (const key of Object.values(stocks)) {
  for (const iterator of key) {
    console.log(iterator);
  }
}
