// singleton - single object
// object literals - method to declare object

const MySym = Symbol("key1")

const JsUser = {
    name: "Ashish", // JsUser is object, name is key and Ashish is the value of key
    full_name: "Ashish Naik",
    [MySym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email: "ashish@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]); // better method to access key and object
console.log(typeof JsUser[MySym]);

JsUser.email = "ashish@chatgpt.com"
// Object.freeze(JsUser) // now I will not be able to change email
JsUser.email = "ashish@microsoft.com" // this will not propagate as I used freeze before this
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting2());

