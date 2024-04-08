// .map() = accepts a callback and applies that function
//          to each element of an array, then returns new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square); // the map method will create a new array, so let's call the new array 'squares'
const cubes = numbers.map(cube); 

function square(element){
    return Math.pow(element, 2) //this raises the element to the power of 2, then returning it
}

function cube(element){
    return Math.pow(element, 3) //this raises the element to the power of 3, then returning it
}

console.log(squares);
console.log(cubes);


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

function upperCase(element){
    return element.toUpperCase();
}

console.log(studentsUpper)