// There are mainly 2 types of data types - PRIMITIVE and NON PRIMITIVE(also called REFERENCE)

// PRIMITIVE (7 TYPES) : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 187714787954864893170716n


// REFERENCE : Array, Objects, Functions

const heros = ["spider-man","thor","wonder women"]

let myObj = {
    name: "ashish",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof bigNumber);

