// functions are pieces of code that perform a task ("calling that function")


//(const = declare it) (give it a name 'pressGrindBeans') (= assignment operator) ('=()=>' arrow function). ({} = the piece of code that's going to run)
// let pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
// }

// pressGrindBeans();


let coffeeIsGrinding = false
let pressGrindBeans = () => {
    if(coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true
    }
}

pressGrindBeans()
pressGrindBeans()
pressGrindBeans()


//parameters povide ability for functions to act based on data inputs

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300,50449921)
cashWithdrawal(30,50449921)
cashWithdrawal(200,50447921)

// google = 'what is scope?'
// google = 'javascript truthy language

let addUp = (num1, num2) => {
    return num1 + num2
}
addUp(2, 3) // this one will not be displayed in the console because it has not been console logged
let result = addUp (2, 3)
console.log(addUp(3,5))
console.log(result)


const multiplByNineFifths = (celsius) => {
    return celsius * (9/5)
}
const getFahrenheit = (celsius) => {
    return multiplByNineFifths(celsius) + 32
}
console.log("the temperature is" + getFahrenheit(15) + " °F")



const getCelsius = (Farenheit) => {
    // 55
    return Farenheit - 32
}
const multiplByFiveNinths = (Farenheit) => {
    return Farenheit / (5/9)
}
console.log("the temperature is" + getCelsius(15
    ) + " °C")

// 3 ways 


/*Activity 1
• Create a JavaScript program that calculates the average grade of a student based on their scores in three subjects: Math, Science, and English.
• Define a function named calculateAverage that takes three parameters: mathScore, scienceScore, and englishScore.
• Inside the function, calculate the average score by adding up the scores of the three subjects and dividing by 3.
• Return the average score from the function.
• Call the calculateAverage with the separate score results as arguments and log the result to the console.*/

/*
function calculateAverage(mathScore, scienceScore, englishScore) {
    // Calculate the average score
    let averageScore = (mathScore + scienceScore + englishScore) / 3;
    return averageScore;
  }
  // Test the function with sample scores
  let mathScore = 70;
  let scienceScore = 85;
  let englishScore = 92;
  // Call the calculateAverage function with the scores and log the result
  let average = calculateAverage(mathScore, scienceScore, englishScore);
  console.log("Average score:", average);
*/

  function calculateAverage(mathScore, scienceScore, englishScore) {
    // Calculate the average score
    let averageScore = (mathScore + scienceScore + englishScore) / 3;
  
    // Determine the corresponding letter grade
    let letterGrade;
    if (averageScore >= 90) {
      letterGrade = 'A';
    } else if (averageScore >= 80) {
      letterGrade = 'B';
    } else if (averageScore >= 70) {
      letterGrade = 'C';
    } else if (averageScore >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }
  
    // Return an object containing both the average score and the letter grade
    return {
      averageScore: averageScore,
      letterGrade: letterGrade
    };
  }
  
  // Test the function with sample scores
  let mathScore = 85;
  let scienceScore = 90;
  let englishScore = 88;
  
  // Call the calculateAverage function with the scores
  let result = calculateAverage(mathScore, scienceScore, englishScore);
  
  // Log the result to the console
  console.log("Average score:", result.averageScore);
  console.log("Letter grade:", result.letterGrade);