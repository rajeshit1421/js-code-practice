const mySym = Symbol("key1");
const jsUser = {
  name: "Rajesh",
  age: 35,
  location: "Jaipur",
  email: "rajesh@test.com",
  isloggedIn: false,
  lastLoginDay: ["Monday", "Friday"],
  [mySym]: mySym,
};

jsUser.greeting = function () {
  console.log(`Hello js user ${this.age}`);
};

console.log(jsUser.greeting());
