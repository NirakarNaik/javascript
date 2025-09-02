const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this means current context ie to access variable in this scope only
        console.log(this);      
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "ashish"
//     console.log(this.username);
    
// }

// chai()


// const chai = function(){
//     let username = "ashish"
//     console.log(this.username);
    
// }

// chai()




const chai = () => { // => is arrow function
    let username = "ashish"
    console.log(this);
    
}

// chai()

// ++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4))

// IMPLICIT RETURN 

const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(3,4))

