// DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // js mai months 0 se shuru hote hai

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023") // MM/DD/YYYY
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // time in miliseconds
console.log(myCreatedDate.getTime()); // time in miliseconds
console.log(Math.floor(Date.now()/1000)); // time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''

})


