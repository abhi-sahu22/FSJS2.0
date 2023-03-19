// 17. Write a program which tells the number of days in a month.

// ==========SOLUTION==========

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = [28, 30, 31]; //(Days of february in leap year is not considered as question didn't ask)

let month; 

const monthName = (month) => {
  switch (month) {
    case months[0] ||
      months[2] ||
      months[4] ||
      months[6] ||
      months[7] ||
      months[9] ||
      months[11]:
      return `There are ${days[2]} days in this month.`

    case months[3] || months[5] || months[8] || months[10]:
      return `There are ${days[1]} days in this month.`;

    case months[1]:
      return `There are ${days[0]} in this month.`;

    default:
      return `This is an invalid month.`;
  }
}

//Break was not written as it was not needed inside a function.

// Example for (month)
console.log(monthName("April"));

