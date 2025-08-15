// ARRAY

const myArr = [0,1,2,3,4,5,true,'ashish']
console.log(myArr[7]);

const myHeros = ['shaktiman','naagraj']

const myArr2 = new Array(1,2,3,4)

// ARRAY METHODS

myArr.push(6)
myArr.push(7)
myArr.pop() // removes last value
console.log(myArr);

myArr.unshift(9) // adds 9 in 0 index
console.log(myArr);

myArr.shift(9) // removes 9
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(newArr);
console.log(myArr);

// SLICE and SPLICE

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);




