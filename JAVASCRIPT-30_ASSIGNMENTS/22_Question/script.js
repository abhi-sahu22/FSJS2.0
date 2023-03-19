/*
22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

// ==========SOLUTION==========

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// -----sorting the Array(ascending)-----

let sorted = ages.sort();
console.log(sorted); //sorted = [19, 19, 20, 22, 24, 24, 24, 25, 25, 26] 


// -----Min and Max age-----

let min = Math.min(...ages);
console.log(min); //19

let max = Math.max(...ages);
console.log(max); //26

// -----Median age-----

function median() {
    if (sorted.length % 2 != 0) {
        return sorted[(sorted.length - 1) / 2]
    }
    else {
        return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2;
    }
}

console.log(median()); //24

//-----average-----

function average() {
    let sum = 0;
    for (i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / ages.length
}

console.log(average()); //22.8

// -----Range of the ages-----
let range = max - min;   //(min and max were defined above)
console.log(range); //7

// -----Comparing the value of (min - average) and (max - average), using abs() method-----

let difference = (a, b) => {
    return Math.abs(a - b)
}

// -----for (min - average)-----

let minAvg = difference(min, average());
console.log(minAvg); //3.8000000000000007

// -----for (max - average)-----

let maxAvg = difference(max, average());
console.log(maxAvg); //3.1999999999999993

// -----minAvg and maxAvg comparision

let minMax = difference(minAvg, maxAvg);
console.log(minMax); //
