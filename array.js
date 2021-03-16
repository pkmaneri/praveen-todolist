// write a program to odd number the given array
function findOddNumber(inputArr) {
    let outputArr = [];
    for (i = 0; i < inputArr.length; i++) {
        let element = inputArr[i];
        if (element % 2 != 0) {
            outputArr.push(element);
        } else {

        }
    }
    return outputArr;
}
// write a program to even number the given array
function findEvenNumber(inputArr) {
    let outputArr = [];
    for (i = 0; i < inputArr.length; i++) {
        let element = inputArr[i];
        if (element % 2 == 0) {
            outputArr.push(element);
        }
    }
    return outputArr;
}

// Find the Kth max and Kth min number in an array
function findMax(inputArr) {
    let maxNumber = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {
        let element = inputArr[i];
        if (maxNumber < element) {
            maxNumber = element;
        }
    }
    return maxNumber
}
function findMinNumber(inputArr) {
    let minNumber = inputArr[1];
    for (let i = 0; i < inputArr.length; i++) {
        let element = inputArr[i];
        if (minNumber > element) {
            minNumber = element;
        }
    }
    return minNumber
}
function reverseNumber(inputArr) {
    let revNumber = inputArr[1];
    for (let i = 0; i < inputArr.length - 1; i--) {
        revNumber.push(inputArr[i])
    }
    return revNumber
}
// Write a program to sort the alphanumaric
function sort(fruits) {
    return fruits.sort();
}
sort(["Banana", "Orange", "Apple", "Mango"]);
// write a program to reverse the alphanumaric
function sort(fruits) {
    return fruits.reverse();
}
// Sort the array of 0s, 1s, and 2s
function sortNumber(points) {

    return points.sort(function (a, b) { return a - b });

}
sortNumber([10, 15, 1, 6, 7]);
//result
[1, 6, 7, 10, 15];
// Move all the negative elements to one side of the array
function negativeNumber(inputArr) {
    let negNumber = []
    let posNumber = []
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] < 0) {
            negNumber.push(inputArr[i]);
        } else {
            posNumber.push(inputArr[i]);
        }
    }
    return posNumber.concat(negNumber)
}
// Find the Union and Intersection of the two sorted arrays

function unionIntersection(inputArr) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = arr1.concat(arr2) = []
}

for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < 0) {
        arr1.push(inputArr[i]);
    } else {
        arr2.push(inputArr[i]);
    }
    return arr3
}

// Check if a key is present in every segment of size k in an array
// Find the minimum and maximume element in an array
// Write a program to reverse the array
// Write a program to sort the given array
// Find the Kth largest and Kth smallest number in an array
// Find the occurrence of an integer in the array
// Sort the array of 0s, 1s, and 2s
// Move all the negative elements to one side of the array
// Find the Union and Intersection of the two sorted arrays
// Level 2
// Write a program to cyclically rotate an array by one
// Find the missing integer
// Count Pairs with given sum
// Find duplicates in an array
// Sort an Array using Quicksort algorithm
// Find common elements in three sorted arrays
// Find the first repeating element in an array of integers
// Find the first non-repeating element in a given array of integers
// Find the largest three elements in an array Time
// Rearrange the array in alternating positive and negative items
// Find if there is any subarray with sum equal to zero
// Find Largest sum contiguous Subarray
// Find the factorial of a large number
// Find Maximum Product Subarray
// Find longest consecutive subsequence
// Find the minimum element in a rotated and sorted array
// Find all elements that appear more than N/K times
// GCD of given index ranges in an array
// Minimize the maximum difference between the heights
// Minimum number of Jumps to reach end
// Find the two repetitive elements in a given array
// Find a triplet that sum to a given value
// Construct a N*M matrix from the user input
// Find the row with maximum number of 1’s
// Print the matrix in a Spiral manner
// Find whether an array is a subset of another array
// Implement two Stacks in an array
// Majority Element
// Wave Array
// Trapping Rain water
// Level 3
// Maximum Index
// Max sum path in two arrays
// Find Missing And Repeating
// Stock buy and sell Problem
// Pair with given sum in a sorted array
// Chocolate Distribution Problem
// Longest Consecutive Subsequence
// Print all possible combinations of r elements in a given array
// Coin Change Problem
// Longest Alternating subsequence

// interview question
// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.
// 1call
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say() {
    console.log(arguments[0] + ' ' + this.firstName + ' ' + this.lastName);
}

let arr = [];
let arr = [1, -1, 2, 3];
0, 1, 2, 3
arr[1];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
}
arr[1] = 4;
arr = null;
// Find the minimum and maximume element in an array
let minValue = arr[0]

for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (minValue > currentValue) {
        minValue = currentValue
    }

}
let arr = [1, -1, 2, 3];
let maxValue = arr[0]
for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (maxValue < x) {
        maxValue = x
    }
}
console.log(maxValue)
// Write a program to reverse the array
let arr = [1, -1, 2, 3];
let reverseArr = []
for (let i = arr.length - 1; i >= 0; i--) {
    let reverseNumber = arr[i];
    reverseArr.push(reverseNumber)
}
// Write a program to sort the given array
let arr = [1, -1, 2, 3, -6];

arr.sort(function (a, b) {
    return (a - b)
})
let arr = [1, -1, 2, 3, -6, 3, 2];
arr.sort((a, b) => {
    return (a - b)

})
// Find the occurrence of an integer in the array
function findOccurrence(x, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            counter++
        }
    }
    return counter;
}

// Find the Union and Intersection of the two sorted arrays
function unionIntersection(x, arr1, arr2) {
    let counter = arr1.concat(arr2) = []

    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            counter
        }
    }
    return counter
}








