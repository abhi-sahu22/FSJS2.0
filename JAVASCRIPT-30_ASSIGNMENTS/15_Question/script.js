/*
15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A (IT MUST BE 90-100 AS IN GRADE B THE RANGE IS TILL 89)
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

// ==========SOLUTION==========

const scoreGrading = (score) => {
    // Between 90-100
    if(score <= 100 && score >= 90) {
        return "The Grade is : A"
    }
    // Between 70-89
    if(score <= 89 && score >= 70) {
        return "The Grade is : B"
    }
    // Between 60-69
    if(score <= 69 && score >= 60) {
        return "The Grade is : C"
    }
    // Between 50-59
    if(score <= 59 && score >= 50) {
        return "The Grade is : D"
    }
    // Between 0-49
    else if(score <= 49 && score >= 0) {
        return "The Grade is : F";
    }
}


// Example for score
console.log(scoreGrading(90));
console.log(scoreGrading(74));
console.log(scoreGrading(66));
console.log(scoreGrading(56));
console.log(scoreGrading(33));
// node script.js