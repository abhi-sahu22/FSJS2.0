// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

// ==========SOLUTION========== (Result inside terminal using node.js)

let isPrime = true;

function primeNumbers(number) {
    if (number < 2) return !isPrime;
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            return !isPrime;
    }
    return isPrime;
}

for (let i = 0; i < 100; i++) {
    if (primeNumbers(i)) 
        console.log(i);
}

// Kindly, run the terminal for the result