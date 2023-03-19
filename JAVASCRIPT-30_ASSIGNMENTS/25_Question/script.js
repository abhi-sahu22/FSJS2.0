/*
25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/

// ==========SOLUTION==========

let inputWeight = parseInt(prompt("Enter your body weight (kg):"));
let inputHeight = parseInt(prompt("Enter your height (centimeter):"));

// console.log(inputHeight);
function bmiCalculator() {
    let sqheight = Math.pow(inputHeight, 2) / 10000;
    let bmi = inputWeight / sqheight;
    bmi = bmi.toFixed(2);
    if (bmi < 18.5) {
        alert(`Underweight: BMI is less than 18.5 i.e. ${bmi}.`);
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        alert(`Normal weight: BMI is 18.5 to 24.9 i.e. ${bmi}.`);
    }
    if (bmi >= 25 && bmi <= 29.9) {
        alert(`Overweight: BMI is 25 to 29.9 i.e. ${bmi}.`);
    }
    else {
        alert(`Obese: BMI is 30 or more i.e. ${bmi}.`);
    }
    // return bmi;
} 

console.log(bmiCalculator());
