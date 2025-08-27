// // const accountId = 2148
// // let name = "ashish"
// // var x = 6 // using var is not recommended bcoz of issue in block scope and functional scope
// // let age = 22

// // console.log(accountId);
// // console.log(name);
// // console.log(x);

// // console.table([accountId,name,x])


// // console.log(typeof "Ashish");
// // console.log(typeof age);
// // console.log(typeof null);
// // console.log(typeof undefined);

// // let score = 98
// // console.log(typeof score);
// // console.log(typeof(score));
// // console.log("score");

// // let value = 3
// // let negValue = -value
// // console.log(negValue);

// // let str1 = "hello"
// // let str2 = " ashish"
// // let str3 = str1 + str2
// // console.log(str3);

// // console.log(1 + "2");
// // console.log("1" + 2);
// // console.log("1" + 2 + 2);
// // console.log(1 + 2 + "2");

// // console.log( (3 + 4) * 5 % 3);
// // console.log(true);
// // console.log(+true);
// // console.log(-true);

// // console.log(+"");

// // let num1, num2, num3
// // num1 = num2 = num3 = 2 + 2

// // let gameCounter = 100
// // // gameCounter++;
// // gameCounter += 5
// // console.log(gameCounter);


// // console.log(2 > 1);

// // console.log("2" > 1);
// // console.log("02" > 1);

// // console.log(null > 0);
// // console.log(null == 0); 
// // console.log(null >= 0);
// // console.log("null" >= 0);
// // The reason is that an equality check == and comparisons < > <= >= work differently.
// // Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.

// // console.log(undefined == 0);
// // console.log(undefined > 0);
// // console.log(undefined < 0);

// // conversions from line 6 to 15 are confusing(so I will avoid them)


// // === is known as strict equality 

// // console.log((4-2) === 2);

// // There are mainly 2 types of data types - PRIMITIVE and NON PRIMITIVE(also called REFERENCE)

// // PRIMITIVE (7 TYPES) : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// // const score = 100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail; // undefined

// // const id = Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id === anotherId);

// // const bigNumber = 187714787954864893170716n


// // REFERENCE : Array, Objects, Functions

// // const heros = ["spider-man","thor","wonder women"]

// // let myObj = {
// //     name: "ashish",
// //     age: 19,
// // }
// // console.log(myObj);

// // const myFunction = function(){
// //     console.log("Hello World");   
// // }

// // console.log(typeof bigNumber);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // THERE ARE MAINLY TWO TYPES OF MEMORY - STACK(used in primitive) and HEAP(used in non-primitive)

// // let myYoutubename = 'ashishyt.com'
// // let anothername = myYoutubename
// // anothername = "nirakaryt"

// // console.log(myYoutubename);
// // console.log(anothername);

// // let userOne = {
// //     email: "user@gmail.com",
// //     upi: "user@ybl"
// // }

// // // console.log(userOne);

// // let usertTwo = userOne

// // usertTwo.email = "ashish@google.com"
// // console.log(userOne.email);
// // console.log(usertTwo.email);
// // console.log(userOne.upi);

// // const name = "ashish"
// // const repoCount = 5

// // // console.log(name + repoCount);

// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('ashkar')
// // console.log(gameName);
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt('2')); // character at index 2
// // console.log(gameName.indexOf('k'));

// // const newString = gameName.substring(0,4)
// // console.log(newString);

// // const anotherString = gameName.slice(-8,4)
// // console.log(anotherString);

// // const newStringOne = "     ashish    "
// // console.log(newStringOne);
// // console.log(newStringOne.trim());
// // console.log(newStringOne.replace('a','g'));

// // const url = "https://ashish.com/ashish%20naik"
// // console.log(url.replace('%20','-'));
// // console.log(url.includes('sundar'));

// // console.log(gameName.split('-'));

// // const name = "ashish"
// // console.log(name.includes('ish'));

// const score = 400

// const balance = new String(100)
// // console.log(balance);

// console.log(balance.toString().length);
// // console.log(balance.toFixed(2));

// const otherNumber = 23.8966
// // console.log(otherNumber.toPrecision(3));

// // console.log(Math);
// // console.log(Math.abs(-4)); // abs - absolite value (changes -ve to +ve)
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2)); // ceil(ceiling) - gives upper round off value
// // console.log(Math.floor(4.9)); // floor - gives lower round off value
// // console.log(Math.min(4,3,6,8));
// // console.log(Math.max(4,3,6,8));

// // DATES

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// // let myCreatedDate = new Date(2023, 0, 23)
// // console.log(myCreatedDate.toDateString()); // js mai months 0 se shuru hote hai

// // let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// // console.log(myCreatedDate2.toLocaleString());

// // let myCreatedDate3 = new Date("01-14-2023") // MM/DD/YYYY
// // console.log(myCreatedDate3.toLocaleString());

// // let myTimeStamp = Date.now()
// // console.log(myTimeStamp); // time in miliseconds
// // console.log(myCreatedDate.getTime()); // time in miliseconds
// // console.log(Math.floor(Date.now()/1000)); // time in seconds

// // let newDate = new Date()
// // console.log(newDate);
// // console.log(newDate.getMonth() + 1);
// // console.log(newDate.getDay());

// // newDate.toLocaleString('default',{
// //     weekday: "long",
// //     timeZone: ''

// // })

// let score = 90
// console.log(typeof score);

// const val = "ashish"
// console.log(typeof(val));

// let valueInNumber = Number(score)
// console.log(valueInNumber);

// let isLoggedIn = 1
// let boolean = Boolean(isLoggedIn)
// console.log(boolean);

// let number = 21
// stringNum = String(number)
// console.log(stringNum);
// console.log(typeof(stringNum));

let str1 = "hi"
let str2 = "ashish"
let str3 = str1 +" " + str2 + " naik"
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+true);
// console.log(-true);

let gameCounter = 100
gameCounter --;
// console.log(gameCounter);

// console.log(2>1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0); 
// console.log(null >= 0);
// console.log("null" >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log("2" === 2);

// const myfunc = function(a){
//     console.log("Hello World", a);
    
// }

// myfunc("hehe");

// let user = {
//     name: "ashish",
//     age:18,
//     gender:"male"
// }
// user.email = "ashish@google.com"

// console.log(user);

// console.log(user.email);

// let name = "ashish"
// let repoCount = 5

// intro = `Hello my name is ${name} and my repo count is ${repoCount}`
// console.log(intro);

// const gameName = new String('ashkar')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// const score = 400

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // by default United States standard
// console.log(hundreds.toLocaleString('en-IN')); // Indian standard

// // +++++++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // abs - absolite value (changes -ve to +ve)
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // ceil(ceiling) - gives upper round off value
// console.log(Math.floor(4.9)); // floor - gives lower round off value
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random()); // always gives a random number between 0 and 1
// console.log((Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // js mai months 0 se shuru hote hai

// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("01-14-2023") // MM/DD/YYYY
// console.log(myCreatedDate3.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // time in miliseconds
// console.log(myCreatedDate.getTime()); // time in miliseconds
// console.log(Math.floor(Date.now()/1000)); // time in seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: ''

// })


