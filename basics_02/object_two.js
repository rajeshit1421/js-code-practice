//Singlton

const tinderUser = new Object();

tinderUser.Id = "123abc";
tinderUser.name = "Sannn";
//console.log(tinderUser);

const regularUser = {
  email: "rr@test.co.in",
  fullName: {
    userFullName: {
      firstName: "Rajesh",
      lastName: "Vishwakarma",
    },
  },
};

//console.log(regularUser.fullName?.userFullName?.firstName);
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("jjjj"));
