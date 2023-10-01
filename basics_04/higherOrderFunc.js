/* A higher order function is a function that takes one or more functions as arguments,
 or returns a function as its result. */

/**
 * map()==> function
 * The JavaScript array map() method calls the specified function for every array element and returns the new array.
 * Syntax : arr.map(function(element, index, array){  }, this);
 */
// Ecample 1: 
const mapArr = [1, 2, 3, 4, 5];
const mapRes = mapArr.map((item) => {
    return item + 3;
});

// Example 2:
const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Jack', lastName: 'Doe', age: 35 },
    { firstName: 'Jill', lastName: 'Doe', age: 40 },
    { firstName: 'Joe', lastName: 'Doe', age: 45 },
]
const mapResNew = users.map((item) => {
    const resData = item.firstName + ' ' + item.lastName;
    return resData;
});

/**
 * forEach
 * forEach() method iterates over the array items, in ascending order, without mutating the array.
 * foreach has not return 
 */

const colors = ["Black", "Red", "White"];
colors.forEach((item) => {
    // console.log(item);
});

// For if you want return value 
const newArr = [];
colors.forEach((item, index) => {
    //Use new blank array and push function
    return newArr.push({ "index": index, "item": item });
});

/**
 * filter()
 * The filter() function creates a new array populated with all the elements that passed the condition of the callback function
 * Filter use for condition
 */
const students = [
    { name: 'John James', status: true },
    { name: 'Micheal Obi', status: false },
    { name: 'Bola Ade', status: true },
    { name: 'Emmanuel', status: false },
    { name: 'Faithfulness Alamu', status: true },
];
const resFilter = students.filter((item) => item.status === true);

/**
 * Reduce()
 * This method executes a callback function on every element in the array, which results in a single value.
 * The callback function accepts the following four parameters:
           Accumulator,Current value,Current index,Source array
 */
const reduceArr = [2, 3, 4, 5, 6];
const resultReduce = reduceArr.reduce((acc, curr) => {
    // console.log(acc, curr);
    return acc + curr;
}, 2);
//console.log(resultReduce);

/**
 * find()
 * The method find() is used to return the first array element that passes a certain test function.
 */

const findArr = [2, 5, 33, 1, 0, 9];
const findRes = findArr.find((item) => {
    return item > 5
});

/**
 * findIndex()
 * The method findIndex is used to return the index of the first array element that passes a certain test function.
 */

const findIndexArr = [2, 5, 33, 1, 0, 9];
const findIndexRes = findIndexArr.findIndex((item) => {
    return item > 5;
});
// console.log(findIndexRes);

/**
 * indexOf
 * The indexOf() method is used when we want to find the first occurrence of a specified element and the element is known
 * 
 * Difference between indexOf and findIndex()-->
 * The indexOf() method is used when we want to find the first occurrence of a specified element and the element is known. The findIndex() method is used when we want to specify a particular condition to that element.
 * indexOf() Return Value
     ---- Returns the first index of the element in the array if it is present at least once.
     ---- Returns -1 if the element is not found in the array.
 * 
 */

const indexofArr = [2, 5, 33, 1, 0, 9];
const indexofRes = findIndexArr.indexOf(33);
const IndexOfNotFound = findIndexArr.indexOf(90);
//console.log(IndexOfNotFound);

// findIndex and indexOf best example
function findAllIndex(array, element) {
    indices = [];
    var currentIndex = array.indexOf(element);
    while (currentIndex != -1) {
        indices.push(currentIndex);
        currentIndex = array.indexOf(element, currentIndex + 1);
    }
    return indices;
}

var priceList = [10, 8, 2, 31, 10, 1, 65, 10];

var occurance1 = findAllIndex(priceList, 10);
console.log(occurance1); // [ 0, 4, 7 ]

var occurance2 = findAllIndex(priceList, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList, 9);
console.log(occurance3); // []