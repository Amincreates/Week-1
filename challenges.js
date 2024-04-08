/* Task 1: Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’. 
console.log the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”).*/
// First define what you ate for breakfast, lunch and dinner
let breakfast = "Eggs"
let lunch = "Chicken and Rice"
let dinner = "Porridge"
// Concantenated the strings into ta single string in the specified format
let eatenToday = `breakfast:${breakfast}, lunch:${lunch}, dinner:${dinner}`
// Log the string 
console.log(eatenToday)


/* Task 2: Pass in a parameter called num. If num is a data type of string or num is less than 
or equal to 0, return the string 'needs to be a positive number’. If num is divisible by 3 
return “fizz”, if num is divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return
 “fizz buzz”. If num is not divisible by 3 or 5 return the value of num. Print the result*/
function fizzBuzz(num) {
// Check if num is a string or less than or equal to 0
if (typeof num === 'string' || num <= 0){
    return 'needs to be a positive number'
}

// Check if num is divisble by both 3 and 5
if (num % 3 === 0 && num % 5 === 0) {
    return "fizz buzz"
}

// Check if num is divisable by 3
if (num % 3 === 0) {
    return "fizz"
}

// Check if num is divisable by 5
if (num % 5 === 0) {
    return "buzz"
}

// If numn is not divisable by 3 or 5, return the value of num
return num
}

// Test the fuction with different values of num
console.log(fizzBuzz(3)) // Output: fizz
console.log(fizzBuzz(5)) // Output: buzz
console.log(fizzBuzz(15)) // Output: fizz buzz
console.log(fizzBuzz(7)) // Output: 9
console.log(fizzBuzz(-8)) // Output: needs to be a positive number
console.log(fizzBuzz("abc")) // Output: needs to be a positive number
console.log(fizzBuzz("testing")) // Output: needs to be a positive number
