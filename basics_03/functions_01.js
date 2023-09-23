function sayMyname() {
  console.log("Rajesh");
}

// sayMyname();

function addTwoNum(num1, num2) {
  return num1 + num2;
}

const res = addTwoNum("raje", "");
function loginUserMsg(userName) {
  if (!userName) {
    return `User name required`;
  }
  return `Welcome ${userName} is loggedIn`;
}

const result = loginUserMsg("rajesh");

function calculateCart(val1, val2, ...num) {
  return num;
}

const resCart = calculateCart(200, 300, 400, 500);
console.log(resCart);
