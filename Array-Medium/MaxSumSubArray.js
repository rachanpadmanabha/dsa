// Kadane’s Algorithm: Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray(containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

//     Examples
// Example 1:

// Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output: 6

// Explanation: [4, -1, 2, 1] has the largest sum = 6. 

// Examples 2:

// Input: arr = [1]

// Output: 1

// Explanation: Array has only one element and which is giving positive sum of 1. 

function maxSubArray(arr) {
    let n = arr.length
    let ansEnd = 0
    let ansStart = 0
    let maxi = -Infinity
    let sum = 0
    let start = 0;
    for (let index = 0; index < arr.length; index++) {
        if (sum == 0) { start = index; }
        sum += arr[index]
        if (sum > maxi) {
            maxi = sum;
            ansStart = start;
            ansEnd = index;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return arr.slice(ansStart, ansEnd + 1)
}

// Test cases
const testCases = [
    {
        arr: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        expected: 6
    },
    {
        arr: [1],
        expected: 1
    },
    {
        arr: [5, -8, 3, 2, 1],
        expected: 6
    },
    {
        arr: [-2, -3, 4, -1, -2, 1, 5, -3],
        expected: 7
    },
    // Add more test cases as needed
];

// Run test cases
for (const testCase of testCases) {
    const { arr, expected } = testCase;
    const result = maxSubArray(arr);
    console.log(`Input: [${arr}], Output: ${result}, Expected: ${expected}`);
}

// function findOptimalPoint2(arr) {
//     arr.sort((a, b) => a - b)
//     let firstWareHouse = arr[0]
//     let lastWarehouse = arr[-1]
//     answer = 0

//     let minimumDistance = 0

//     for (let i = firstWareHouse; i < lastWarehouse + 1; i++) {
//         let totalDistance = 0
//         for (let j = 0; j < arr.length; j++) {
//             totalDistance += Math.abs(arr[j] - i) * 2

//         }
//         if (totalDistance < minimumDistance) {
//             answer = i
//             minimumDistance = Math.min(totalDistance, minimumDistance)
//         }

//     }
//     return [minimumDistance, answer]
// }