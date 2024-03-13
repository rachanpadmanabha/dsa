// Find the Majority Element that occurs more than N / 2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N / 2 times in the given array.You may consider that such an element always exists in the array.

//     Examples
// Example 1:
// Input Format: N = 3, nums[] = { 3, 2, 3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.

//     Example 2:
// Input Format: N = 7, nums[] = { 2, 2, 1, 1, 1, 2, 2}

// Result: 2

// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

//     Example 3:
// Input Format: N = 10, nums[] = { 4, 4, 2, 4, 3, 4, 4, 3, 2, 4}

// Result: 4

function majorityElement(array) {
    let hashmap = new Map()
    let n = array.length
    for (let index = 0; index < n; index++) {
        let count = hashmap.get(array[index]) || 0
        hashmap.set(array[index], count + 1)
        if (count + 1 > Math.floor(n / 2) + 1) {
            return array[index]
        }
    }
    return -1
}

function majorityElement1(arr) {
    let count = 0
    let element = 0

    for (let index = 0; index < arr.length; index++) {
        if (count == 0) {
            element = arr[index]
            count = 1
        }
        else if (arr[index] == element) {
            count += 1
        }
        else {
            count--
        }
    }
    return element
}

const testCases = [
    {
        nums: [3, 2, 3],
        expected: 3
    },
    {
        nums: [2, 2, 1, 1, 1, 2, 2],
        expected: 2
    },
    {
        nums: [4, 4, 2, 4, 3, 4, 4, 3, 2, 4],
        expected: 4
    },
    // Add more test cases as needed
];

for (const testCase of testCases) {
    const { nums, expected } = testCase;
    const result = majorityElement1(nums);
    console.log(`Input: [${nums}], Output: ${result}, Expected: ${expected}`);
}