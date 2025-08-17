function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

addTwoNumbers(3,4)
addTwoNumbers("3",4)
addTwoNumbers(null,4)
addTwoNumbers(undefined,4)

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)
console.log("Result: ", result);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"));
console.log(loginUserMessage());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){ // ... is called rest and spread operator (both are different)
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "ashish",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


