// Sort an array of 0s, 1s and 2s
// Problem Statement: Given an array consisting of only 0s, 1s, and 2s.Write a program to in -place sort the array without using inbuilt sort functions. (Expected: Single pass-O(N) and constant space)

// Examples
// Input: nums = [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]

// Input: nums = [2, 0, 1]
// Output: [0, 1, 2]

// Input: nums = [0]
// Output: [0]

function sort012Array(arr) {

    let low = 0
    let mid = 0
    let high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid] == 1) {
            mid++;
        }
        else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr
}


const testCases = [
    {
        nums: [2, 0, 2, 1, 1, 0],
        expected: [0, 0, 1, 1, 2, 2]
    },
    {
        nums: [2, 0, 1],
        expected: [0, 1, 2]
    },
    {
        nums: [0],
        expected: [0]
    },
    {
        nums: [1, 1, 1, 0, 0, 0],
        expected: [0, 0, 0, 1, 1, 1]
    },
    {
        nums: [2, 2, 2, 1, 1, 1],
        expected: [1, 1, 1, 2, 2, 2]
    },
    {
        nums: [0, 2, 1, 1, 2, 0],
        expected: [0, 0, 1, 1, 2, 2]
    }
];

// Test cases to verify correctness
for (const testCase of testCases) {
    const { nums, expected } = testCase;
    const sortedArray = sort012Array(nums);
    console.log(`Input: [${nums}], Output: [${sortedArray}], Expected: [${expected}]`);
}
