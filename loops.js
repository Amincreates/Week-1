// let favDrink = ["Water", "Coffee", "Orange Juice"]

// console.log (favDrink[0])
// console.log (favDrink[1])
// console.log (favDrink[2])

// loops help iterate through and perform a task for each individual item in the array
// don't get caught in an infitie loop

// for loop

// 1. initialExpression (posotion)
// 2. Conition
// 3. True / False
// 4. Incrementing/ Decrementing
// 5. do stuff

// imitial      condition       increment i
//                  length = 3

// for (let i = 0; i < favDrink.length; i++){
//     console.log(favDrink[i])
// }


let multiplesOfTwo = [];

for (let i = 0; i < 20; i++) {
    if(i % 2 == 0){
        multiplesOfTwo.push(i)
    }
}

console.log(`numbers divisible by 2 are ${multiplesOfTwo}`)


//while loops
// a while loop will continue to run while a condition is true
// w while loop will iterate depending on the condition

let age = 15

while (age < 18) {
    console.log("you're a child!")
    age++
}

console.log("you're an adult")