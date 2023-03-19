// 18. Write a program which tells the number of days in a month, now consider leap year.

// ==========SOLUTION==========

let daysOfMonth = (month, year) => {
    if (
      month == "January" ||
      month == "March" ||
      month == "May" ||
      month == "July" ||
      month == "August" ||
      month == "October" ||
      month == "December"
    ) {
      return `There are 31 days in ${month}.`;
    }

    if (
      month == "April" ||
      month == "June" ||
      month == "September" ||
      month == "November"
    ) {
      return `There are 30 days in ${month}.`;
    }

    if(month == "February") {
        if(year % 4 == 0) {
            return `There are 29 days in ${month} of the year ${year}.`
        }
        else {
            return `There are 28 days in ${month} of the year ${year}.`
        }
    }
}


// Example for (month, year)
console.log(daysOfMonth("January"));
console.log(daysOfMonth("February", 2003));
console.log(daysOfMonth("February", 2004));

// node script.js