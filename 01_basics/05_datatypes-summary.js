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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// THERE ARE MAINLY TWO TYPES OF MEMORY - STACK(used in primitive) and HEAP(used in non-primitive)

let myYoutubename = 'ashishyt.com'
let anothername = myYoutubename
anothername = "nirakaryt"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

console.log(userOne);

let usertTwo = userOne

usertTwo.email = "ashish@google.com"
console.log(userOne.email);
console.log(usertTwo.email);





