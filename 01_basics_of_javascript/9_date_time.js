// ======================
// Date & Time in JavaScript
// ======================

// Current Date & Time
let currentDate = new Date();

console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleString());
console.log(typeof currentDate); // object

console.log("--------------------------------");

// Different ways to create a Date

let date1 = new Date(2023, 0, 23);
let date2 = new Date(2023, 0, 23, 5, 3);
let date3 = new Date("2023-01-14");
let date4 = new Date("01-14-2023");

console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());

console.log("--------------------------------");

// Timestamp

let myTimeStamp = Date.now();

console.log("Current Timestamp:", myTimeStamp);
console.log("date4 Timestamp:", date4.getTime());
console.log("Current Timestamp in Seconds:", Math.floor(Date.now() / 1000));

console.log("--------------------------------");

// Get specific parts of the current date

let newDate = new Date();

console.log(newDate);
console.log("Month:", newDate.getMonth() + 1); // +1 because months start from 0
console.log("Day:", newDate.getDay());         // Sunday = 0

console.log(`${newDate.getDay()} and the time`);

console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
    })
);
