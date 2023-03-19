// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// ==========SOLUTION==========(PLEASE RUN LIVE SERVER)

let numberOne = parseInt(prompt("Enter first integer:"));
let operand = prompt("Enter the operation (+ or - or * or /):")
let numberTwo = parseInt(prompt("Enter second integer:"));

function calculator() {
    if(operand == "+") {
        let add = numberOne + numberTwo;
        return alert(add);
    }
    else if(operand == "-") {
        let sub = numberOne - numberTwo;
        return alert(sub);
    }
    else if(operand == "*") {
        let multiply = numberOne * numberTwo;
        return alert(multiply);
    }
    else if(operand == "/") {
        let divide = numberOne / numberTwo;
        return alert(divide);
    }
    else {
        return alert(`Enter valid operand!!!`) 
    }
}

calculator();