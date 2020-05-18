// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. 
//Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//had to get Andee's help on this... felt like the logic I had for it kept not working and it made me mad. Not sure how to make this work without an input, although the prompt didn't specify WHAT the input should be. Need help understanding it more on Monday.


//create a function that takes in the desired count of numbers in the Fibonacci sequence
const fibonacci = (count) => {
    //create a starter array - need this to work off of
    let startArray = [1, 1]
    // create a for loop that iterates through the starter array as many times as my desired count   
    for(let i=2; i<count; i++){
        //push into the array the addition of the previous two indexes
        startArray.push(startArray[i-2] + startArray[i-1])
    }
    return startArray
}

//console.log (fibonacci(10))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function that takes in an array
const numberSorter = (array) => {
    //filter that array by typeof to select only the numbers
    let filteredArray = array.filter(value => typeof value === "number")
    //filter again to sort out only odd numbers
    .filter(value => value%2 !== 0)
    //sort the array to be in numeric order
    .sort((a,b) => a-b)
    return filteredArray
}
//return the sorted array

console.log(numberSorter(fullArr1))
console.log(numberSorter(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//create a funtion that takes in a string
const centerLetters = (string) => {
    //split the string into an array
    let splitString= string.split("")
    //determine the center index of the array by using math.floor on the length
    let centerIndex = Math.floor(splitString.length/2)

    //create a conditional that will evaluate the length of the string to determine if it is even or odd
    //if the string length is even
    if (string.length%2 === 0){
        let middleTwo= splitString[centerIndex-1]+splitString[centerIndex]
        return middleTwo
        
    // if the string length is odd
    } else {
        return splitString[centerIndex]
    }
}

console.log("the center letter is:", centerLetters(middleLetters1))
console.log("the center letters are:", centerLetters(middleLetters2))

// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//create a class
class Sphere {
    constructor(){
        //set the sphere to 0 for the blueprint
        this.sphere = 0;
    }
    //create the method that calculates the area of a sphere
    areaOfSphere (radius) {
        this.sphere = Math.floor(((radius**2)*4)*Math.PI)
        //this will log to the console the area
        console.log(`The area of a sphere with radius ${radius} is approximately ${this.sphere}`)
    }
}

sphereOne = new Sphere()
sphereOne.areaOfSphere(2)

sphereTwo = new Sphere()
sphereTwo.areaOfSphere(6)

sphereThree = new Sphere()
sphereThree.areaOfSphere(22)

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//create a function that takes in an array
const accumulatingSum = (array) => {
    //set a starter number for now as zero
    let starter = 0
    //map through the array and 
    return array.map(value => {
        //return the starter + the value AND save starter as that number
        return (starter += value)
    } )
}

console.log(accumulatingSum(numbersToAdd1))
console.log(accumulatingSum(numbersToAdd2))
console.log(accumulatingSum(numbersToAdd3))
