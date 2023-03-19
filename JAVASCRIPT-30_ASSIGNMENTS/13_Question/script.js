// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// ==========SOLUTION========(Please, open in live server for prompt action)

let input = parseInt(prompt("Enter your age:"));

if (input >= 18) {
    alert("You are old enough to drive");
}
else if (input < 18 && input >= 0) {
    let gap = 18 - input;
    alert(`Wait for ${gap} years`)
}
else {
    alert("Don't Enter A Valid Age")
}
