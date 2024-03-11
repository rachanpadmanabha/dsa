// Count Maximum Consecutive One’s in the array
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

//     Examples:

// Example 1:

// Input: prices = { 1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = { 1, 0, 1, 1, 0, 1}

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

function maxConsecutiveOnes(arr) {
    let tempCount = 0
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            tempCount++
        }
        else {
            count = count == 0 || count <= tempCount ? tempCount : count
            tempCount = 0
        }


    }
    count = count == 0 || count <= tempCount ? tempCount : count
    return count
}
let a = maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0])
let b = maxConsecutiveOnes([1, 0, 1, 1, 0, 1])
console.log([a, b])