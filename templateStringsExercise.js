/* Activity 1: Create a program that stores someone's name, age, 
and favourite colour and log it to the console in a complete sentence using Template literals.

Stretch target: Update all of youre variables and write out a new sentence underneath your original.*/

let firstName = "Amin"
let age = 40
let favColour = "Green"

console.log(
    `My name is ${firstName} I am ${age} years old, and my favourite colour is ${favColour}`
)
  
firstName = "John"
age = 50
favColour = "Red"

/* Activity 2: Create a program that stores what you eat today for breakfast, lunch and dinner.
Log these details to the console.

Stretch target: Update each of these variables to what you will eat tomorrow. Log these to the console.*/

let breakfast = "porridge"
let lunch = "chicken curry"
let dinner = "soup"

console.log(
`Today I ate ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner. `
)

breakfast = "toast"
lunch = "sandwich"
dinner = "eggs"

console.log(
    `Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner. `
    )

/*Activity 3: Create a program that calculates the number of days from today to your birth date
Hint: search 'Javascript Date' */

//1. Define birthday
const birthDay = new Date(2025,0,6) // use 0 for January - in Javascript, months start with 0 (so Feb will be 1, March will be 2, etc)

//2. Get today's date
const date = new Date()

//3. Calculate the difference between the 2 dates (this is measured in milliseconds)
const differenceInMilli = birthDay - date

//4. Output the result (convert milliseconds to days and round it down to nearest whole day. There are 86,400,000 milliseconds in 24 hours)
console.log(
    "Number of days left until birthday: ", Math.floor (differenceInMilli / 86400000)
)


/*Activity 4: Create 9 variables: space1, space2... space9.
Assign either the value 'x' or 'o' or '' to each of these variables.
Insert variables into your board using the ${varName} syntax and make it look like the displayed board*/

//Step 1. Create 9 variables and asssign either the value 'x' or 'o' or '' to each of these variables.
let space1 = "x"
let space2 = "0"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

/*Step 2. Draw the board using the symbols '|' and '-' ensuring there a 3 spaces in between.
Then using Template Strings, position each item in the corresponding place. Replace the middle 
space in each section with the template string for the relevant variable.*/
let board = `
   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |    
-----------
   |   |   
 ${space4} | ${space5} | ${space6}
   |   |   
------------
   |   |   
 ${space7} | ${space8} | ${space9}
   |   |    
`

//Step 3. Output the result 
console.log (board)









