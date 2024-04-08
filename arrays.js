/* An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];
*/

let coffeeOrder =[
    "bob - latte",
    "sarah - americano",
    "steve - flat white"
]
console.log(coffeeOrder[1])
//to console log an ideantifier just use square brackets and the position (start at 0,1,2,3)
console.log(coffeeOrder.length) // .lenght - this will give you the total number of items in the array


let cameraBrand = [
    "Canon",
    "Fuji", 
    "Nikon",
    "Sony",
    "Panasonic",
    "Hassleblad"
]

console.log(cameraBrand[1])
cameraBrand[1] = "Samsung" // This is how to reassign a value of an item in the array
console.log(cameraBrand[1])

cameraBrand.push("Toy Camera")
// Array Methods - are used to manipulate or change arrays.
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

cameraBrand.pop()
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.

cameraBrand.shift()
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

cameraBrand.unshift("Canon v2")
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

console.log(cameraBrand)

// Array Iteration Methods
// Array iteration methods operate on every array item:
// Array forEach = The forEach() method calls a function (a callback function) once for each array element.
// Array map()
// Array flatMap()
// Array filter()
// Array reduce()
// Array reduceRight()
// See Also:
// Basic Array Methods
// Array Search Methods
// Array Sort Methods	Array every()
// Array some()
// Array from()
// Array keys()
// Array entries()
// Array with()
// Array Spread (...)

// forEach Tutorial: https://www.youtube.com/watch?v=hP0Rl5euD_o
//https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

/*
The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".
The forEach method passes a callback function for each element of an array together with the following parameters:
Current Value (required) - The value of the current array element
Index (optional) - The current element's index number
Array (optional) - The array object to which the current element belongs
Let me explain these parameters step by step.

Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):

numbers.forEach(function() {
    // code
});

The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:

numbers.forEach(function(number) {
    console.log(number);
});

That's all we need to do for looping through the array*/

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);
// })
  
/*Alternatively, you can use the ES6 arrow function representation for simplifying the code:*/

const numbers = [1, 2, 3, 4, 5];

//numbers.forEach(number => console.log(number));

// Optional Parameters
// Index
// Alright now let's continue with the optional parameters. The first one is the "index" parameter, which represents the index number of each element.

// Basically, we can see the index number of an element if we include it as a second parameter:

numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
})

//Array
//The array parameter is the array itself. It is also optional and can be used if necessary in various operations. 
//Otherwise, if we call it, it will just get printed as many times as the number of elements of the array:

numbers.forEach((number, index, array) => {
    console.log(number, index, array);
});

// The forEach method passes a callback function for each element of an array together with the following parameters:
// Current Value (required) - The value of the current array element
// Index (optional) - The current element's index number
// Array (optional) - The array object to which the current element belongs

let cameraMakes = ["Canon", "Fuji", "Nikon", "Sony", "Panasonic", "Hassleblad"]

cameraMakes.forEach(capitalise);
cameraMakes.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalise(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}