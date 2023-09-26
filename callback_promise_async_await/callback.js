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
  toppings: ["chocolate", "peanuts","butter"],
};
let order = (fruit_name, call_production) => {
  console.log("Order Placed ..Kindly call production function");
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
