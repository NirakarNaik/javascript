// if statement

// if (condition){ // condition must be true to run internal code

// }

const isUserloggedIn = true
const temperature = 41

// if(temperature < 50){ 
//     console.log("less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }
// console.log("EXECUTED");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const balance = 1000

// if(balance>500) console.log("test"); // this is called implicit scope (maan liya hai ki scope hai) as we haven't used {}, but we cant write multiple line
// if(balance>500) console.log("test"),console.log("test 2"); // code is right but dont write like this. not a good practice

// if(balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750")
// } else if (balance < 900) {
//     console.log("Less than 900"); 
// } else {
//     console.log("Less than 1200");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitcard) { // && statement check both conditions if they are true or not
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail){ // || (present below backspace key) is the or operator 
    console.log("User Logged In")
}
