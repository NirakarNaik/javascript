const tinderUser = new Object() // singleton object
const TinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashish",
            lastname: "naik"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)  
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    }
]

console.log(TinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: 'js in hindi',
    price: '999',
    courseInstructor: 'Ashish'
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// INTRODUCTION TO JSON

// {
//     "name": "ashish",
//     "coursename": "js in hindi",
//     "price": "free"
// }

 
