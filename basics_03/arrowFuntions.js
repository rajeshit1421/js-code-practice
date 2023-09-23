const user = {
  username: "rajesh",
  price: 9999,
  welcomeMessage: function () {
    console.log(`${this.username} welcome bro`);
    console.log(this);
  },
};
//user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
// function chai() {
//   let username = "djfdsjf";
//   console.log(this);
// }

//chai();

const chai = () => {
  let username = "djfdsjf";
  console.log(this.username);
};

chai();

chai();
