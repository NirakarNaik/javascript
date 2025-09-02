// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // chai is a named iife
    console.log(`DB CONNECTED`);
})();

//  ()() ---- syntax of iife
// First parenthesis is the one where i will write function definition
// Second parentheis is the execution call

// IIFE IS USED TO REMOVE POLLUTION FROM GLOBAL SCOPE

// IIFE WITH ARROW FUNCTION:
(  (name) => { // it is an unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})('ashish')


// SUMMARY :

// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;



