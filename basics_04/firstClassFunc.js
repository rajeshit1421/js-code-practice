const fun = (a,b)=>{
    return a*b;
}

const mul = fun;
function newFun(a,b,fn){
    return fn(a,b);
}
const newRes = newFun(4,5,mul);
const result = mul(5,5);

console.log('Function 1 result : ',result);
console.log('Function 2 result : ',newRes);