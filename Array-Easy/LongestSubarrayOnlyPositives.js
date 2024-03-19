// Longest Subarray with given Sum K(Positives)
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

//     Examples
// Example 1:
// Input Format: N = 3, k = 5, array[] = { 2, 3, 5}
// Result: 2
// Explanation: The longest subarray with sum 5 is { 2, 3 }. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = { 2, 3, 5, 1, 9}
// Result: 3
// Explanation: The longest subarray with sum 10 is { 2, 3, 5 }. And its length is 3.

function longestSubArray(arr, k) {
    let sum = 0
    let maxLength = 0;
    let preSumMap = new Map();
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        if (sum == k) {
            maxLength = Math.max(maxLength, index + 1)
        }
        let rem = k - sum
        if (preSumMap.has(rem)) {
            let len = index - preSumMap.get(rem)
            maxLength = Math.max(maxLength, len)
        }
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, index)
        }
    }
    return maxLength
}

let a = longestSubArray([2, 3, 5, 1, 9], 10)
let b = longestSubArray([2, 3, 5], 5)
console.log(a, b)