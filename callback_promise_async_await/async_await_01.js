function double2seconds(num){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(num*2);
    }, 2000);
   })
}
// function addPromise(a){
//     return new Promise((resolve,reject)=>{
//         double2seconds(2).then((response)=>{
//             double2seconds(3).then((result)=>{               
//                 double2seconds(25).then((res)=>{
//                     resolve(a+response+result+res);
//                 })               
//             })
//         })
//     })
// }

async function addPromise(num){
    const a = await double2seconds(2);
    const b = await double2seconds(5)
    const c = await double2seconds(25);
    return (num+a+b+c);
}
addPromise(10).then((data)=>{
    console.log('You result is like ---->',data)
});


// addPromise(10).then((data)=>{
//     console.log(data,'-------data');
// })