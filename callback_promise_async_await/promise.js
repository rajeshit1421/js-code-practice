// Promises were invented to solve the problem of callback hell and to better handle our tasks.

/****
 * A promise has three states:
 *     ---> Pending: This is the initial stage. Nothing happens here. Think of it like this,your customer
 *                   is taking their time giving you an order. But they haven't ordered anything yet.
 *     ---> Resolved: This means that your customer has received their food and is happy.
 *     ---> Rejected: This means that your customer didn't receive their order and left the restaurant.
 */

// Make two function order and Production for understanding callback and callback hell concept
/***
 * ####Chart contains steps to make ice cream
 * ------------------------- Time in seconds
 * # Place order             -      2
 * # Cut the fruits          -      2
 * # Add the water and ice   -      1
 * # Start the Machine       -      1
 * # Select Container        -      2
 * # Select Toppings         -      3
 * # Serve the Icecream      -      2
 */
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };

  

// Create a order function which take two argument
let order=(time,work)=>{
    // Create a promise
    return new Promise( ( resolve, reject )=>{
        if( is_shop_open ){    
          setTimeout(()=>{    
           // work is 👇 getting done here
            resolve( work() )    
    // Setting 👇 time here for 1 work
           }, time)    
        }    
        else{
          reject( console.log("Our shop is closed") )
        }    
      })
}
// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then((data)=>{
  console.log(data,'---------->data');
  const time = 0;
  const fun1 = (()=>{
    console.log('production has started')
  })
  return order(time,fun1);
})

// step 3
.then(()=>{
 
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
}).catch(()=>{
    console.log("Customer left")
  }).finally(()=>{
    console.log("end of day")
  })

