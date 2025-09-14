const userEmail = "a@ashish.ai"
if (userEmail) {
    console.log("Got user email")
} else{ 
    console.log("Dont have user email")
}

// falsy values: false,0,-0,BigInt 0n, empty strings, null, undefined, NaN
// truthy valies: every value except falsy values
// surprising truthy values: "0", 'false', " ", [], {}, function(){}

if (userEmail.lenght === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).lenght === 0) {
    console.log("Object is empty");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

console.log(val1)

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Terniary Operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")


