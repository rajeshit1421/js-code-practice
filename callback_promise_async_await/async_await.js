// Promises vs Async/Await in JavaScript

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

  let is_shop_open = true; 
  function time(ms) {

    return new Promise( (resolve, reject) => {
 
       if(is_shop_open){
          setTimeout(resolve,ms);
       }
 
       else{
          reject(console.log("Shop is closed"))
       }
     });
 }
 
 async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
 
 // Trigger
 kitchen();
