// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

// ==========SOLUTION==========

const oddEven = (x) => {
    if(x % 2 == 0) {
        return "The number is even."
    }
    else if(x % 2 == 1) {
        return "The number is odd."
    }
}


// Example with x
console.log(oddEven(54));
console.log(oddEven(33));
