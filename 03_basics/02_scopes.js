// {} with any function or if else is known as scope

let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; index++) {
//     const element = array[i];
    
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function one(){
    const username = "ashish"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true){
    const username = "ashish"
    if (username === "ashish"){
        const website = "youtube"
        // console.log(username + " " + website);
        
    }
} 

// ++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
    
}

console.log((addone(5)));


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
