const name = "ashish"
const repoCount = 5

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ashkar')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2')); // character at index 2
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     ashish    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.replace('a','g'));

const url = "https://ashish.com/ashish%20naik"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));



