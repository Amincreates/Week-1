//
/* forwards slash and star = grey out multiple lines like this:
testtin
testing
*/

// this is a string: console.log("good morning");
// let text1 = "Hello"
// let text2 = "World"
// console.log(good+""+morning+""+world);
//console.log("All around the world").charAt(7).toUpperCase());
//console.log('im variables')

// let = declaring a value that CAN be change
//const = declaring a value that CANNOT be changed
// var = declaring a value that CAN be changed. However it is conisdered a legacy command now

let firstName = "bruce"
firstName = "alfred"
console.log (firstName)
//let (declared it, or making it exist) firstName (identifier) = (assignment operator) "bruce" (this is a string)
// console.log (firstName) - this is to access the variable. we want to view values within our terminal (or console)
// firstName = "alfred" (reassigned the identifier)

const secondName = "wayne"
console.log(secondName)


let age = 6
console.log(age)

const height = 10
console.log(height)

const distance = "10 miles"
console.log(distance)


//Arithmetic Operators +(plus) -(minus) *(multiply) **(to the power of) /(divide) %(remainder) ++(increment by one) --(decrement by one)
//https://www.w3schools.com/js/js_arithmetic.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder


//Assignment operators are used to assign values to variables.The numbers (in an arithmetic operation) are called operands. 
//The operation (to be performed between the two operands) is defined by an operator.

const cars = 3
console.log(cars+9-2+5*2)

let egg = 12
console.log(egg % 5)

//declared variable and assign value
let num = 11
//added and assigned +1
num = num +1
// added and assigned with += assignment operator
num += 1
//console.log variable
console.log(num)


let myName = "amin"
let favNum = 7
let favDrink = "water"


console.log(
    " My name is " + myName + " my favourite number is " 
    + favNum + " and my favourite drink is " + favDrink
    )
    //https://www.w3schools.com/js/js_string_templates.asp
    //Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
    // Example: let text = `Hello World!`;
    //Template Strings allow both single and double quotes inside a string:
    //Example: let text = `He's often called "Johnny"`;
    //Template Strings allow multiline strings:
    //Template String provide an easy way to interpolate variables and expressions into strings.
    //The method is called string interpolation.
    //The syntax is: ${...}
    //let firstName = "John";
    //let lastName = "Doe";
    //let text = `Welcome ${firstName}, ${lastName}!`;
    
    console.log(
        `My favourite drink is ${favDrink} and my favourite number is ${favNum}`
)

//Template Strings allow expressions in strings:
//Example:
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
