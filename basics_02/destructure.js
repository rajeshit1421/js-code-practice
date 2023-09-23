const obj = {
  userName: "rajesh",
  age: 25,
  fullName: {
    firstName: "Thakur",
  },
};
// https://api.github.com/users/hiteshchoudhary
const {
  userName,
  age,
  fullName: { firstName: fname },
} = obj;
