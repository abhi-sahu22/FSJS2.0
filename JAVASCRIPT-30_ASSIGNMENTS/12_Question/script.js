/*
12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

//----------SOLUTION----------
// node script.js 
// ------Function for formatting date

function dateTimeFormater(date, type) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();


  // enabling the date and month to show in two digits always
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  // now we have day, month, year and time (hour and minute)
  // use the type to get the desired format
  if(type === 1) {
    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
  }
  if(type === 2) {
    return day + "-" + month + "-" + year + " " + hour + ":" + minute; 
  }
  if(type === 3){
    return day + "/" + month + "/" + year + " " + hour + ":" + minute; 
  }
  else {
    return "Please, specify valid type between 1 to 3!!!"
  }

}

let now = new Date();

// -----YYYY-MM-DD HH:mm-----
console.log(dateTimeFormater(now, 1));

// -----DD-MM-YYYY HH:mm-----
console.log(dateTimeFormater(now, 2));

// -----DD/MM/YYYY HH:mm-----
console.log(dateTimeFormater(now, 3));




