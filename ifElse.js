/*if (condition) {
    //code block
} else {
    //code block
}
/*

/* Copmarison Operators:
[You use = When setting a value, and use == when checking it. Think of = of it is, and == as equal to]

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
*/



/*

if (condition) {
    //code to be executed
}

*/

// let password = true

// if (password == true) {
//     console.log('password is true')
// } else {
//     console.log('password is false')
// }

/*

// let num = 1

// if(num === 1 ){
//     console.log ("same value. same data type")
// } else {
//     console.log ("not same value, not same data type")
// }

// if (1 != "1") {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if (1 === "1") {
//     console.log(true)
// } else {
//     console.log(false)
// }

*/



// let weatherNow = "sunny"

// if (weatherNow == "sunny") {
//     console.log("today is sunny")
// } else {
//     console.log("today is not sunny")
// }

let weather = "rainy"

if (weather === "rainy") {
    console.log("It's raning... Booohooo!!")
} else if (weather === "sunny") {
    console.log("It's sunny today, yay!!!")
} else if (weather === "snowing") {
    console.log("let's build a snowman")
} else {
    console.log("I'm not sure what the weather is like")
}







let newWord = "football is great"

if (newWord.length > 4 && newWord.length <= 10){
    console.log(`${newWord} is between 4 snd 10 characters`)
} else {
    console.log(`${newWord} is over 10 characters`)
}






let age = 2

if (age >= 18) {
    console.log("You're old enough")
} else if (age < 18 && age >= 10) {
    console.log("You're not old enough")
} else if (age < 10 && age > 3) {
    console.log("You're a baby")
}  else {
    console.log("I'm not sure you're allowed")
}

let kids = "hangry fighting"

if (kids == "happy") {
    console.log("All is well, stay on the course")
} else if (kids == "hungry" || kids == "sad" || kids == "fighting") {
    console.log("Take some food and toys")
} else if (kids == "hangry" && kids == "fighting"){
    console.log("emergency - take food and first aid kit")
} else {
    console.log("Sorry I need to run")
}