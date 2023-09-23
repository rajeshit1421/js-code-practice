// falsy value : false,0,-0,Bigint 0n,"",null,undefined,NAN

// truthy values : "0",'false'," ", [], {} ,function(){}
let val;
val = undefined ?? 10;
console.log(val);

// Ternary Operator
