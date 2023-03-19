// 23. Write a program to check that the number given by the user is a prime number or not.

// ==========SOLUTION========== (PLEASE OPEN LIVE SERVER)

const input = parseInt(prompt("Enter a number:"));
let inputPrime = true;

if (input === 1) {
    alert("1 is not a prime number in itself");
}

else if (input > 1) {
    for (let i = 2; i < input; i++) {
        if (input % i == 0) {
            inputPrime = false;
        }
    }
    if (inputPrime) {
        alert(`${input} is a prime number.`);
    }
    else {
        alert(`${input} is not a prime number.`);
    }
}

else {
    alert("Please enter a number greater than 1.")
}
