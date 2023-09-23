let a = 2;
if (true) {
  let a = 30;
  const b = 20;
  var c = 40;
}

function one() {
  const username = "Rajesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

//one();

if (true) {
  const username = "rajesh";
  if (username) {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);
}
//console.log(username);

function addone(num) {
  return num + 1;
}

const res = addone(5);

console.log(res);

i = 5;
var i;

console.log(i);
