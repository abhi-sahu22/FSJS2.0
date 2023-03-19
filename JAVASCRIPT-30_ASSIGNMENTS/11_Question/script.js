/*
11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

//==========SOLUTION==========

// node script.js

// -----Year-----

let year = new Date().getFullYear();
console.log(year);

// -----Month----- (using local string to get local time date in string)

let month = new Date().getMonth() + 1;
console.log(month);

// -----Date today----- (using local string to get local date in string)

let fullTime = new Date();
let date = fullTime.getDate().toLocaleString();

console.log(date);

// -----Day today as number----- (considering the start from as Sunday = 0)

let day = new Date().getDay().toLocaleString();
console.log(day);

// -----Hours now-----

let hours = new Date().getHours();
console.log(hours);

// -----Minutes now-----

let minutes = new Date().getMinutes();
console.log(minutes);

// -----Seconds elapsed from January 1, 1970 now-----

let seconds = (new Date().getTime()) / 1000;
console.log(seconds);

