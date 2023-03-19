/*
16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

//==========SOLUTION==========

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const seasons = ["Autumn", "Winter", "Spring", "Summer"]

const season = (y) => {
    if (y == months[8] || y == months[9] || y == months[10] ) {
        return `The season is ${seasons[0]}`
    }
    if (y == months[11] || y == months[0] || y == months[1]) {
      return `The season is ${seasons[1]}`;
    }
    if (y == months[2] || y == months[3] || y == months[4]) {
      return `The season is ${seasons[2]}`;
    }
    else if (y == months[5] || y == months[6] || y == months[7]) {
      return `The season is ${seasons[3]}`;
    }
} 


// Example for y
console.log(season("October"));
console.log(season("January"));
console.log(season("March"));
console.log(season("August"));
