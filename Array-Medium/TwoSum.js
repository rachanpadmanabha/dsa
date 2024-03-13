// Two Sum: Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target.Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target.Otherwise, we will return {- 1, -1}.

// Note: You are not allowed to use the same element twice.Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

//     Examples:

// Example 1:
// Input Format: N = 5, arr[] = { 2, 6, 5, 8, 11}, target = 14
// Result: YES(for 1st variant)
//     [1, 3](for 2nd variant)
//     Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and[1, 3] for 2nd variant.

//         Example 2:
// Input Format: N = 5, arr[] = { 2, 6, 5, 8, 11}, target = 15
// Result: NO(for 1st variant)
//     [-1, -1](for 2nd variant)
//     Explanation: There exist no such two numbers whose sum is equal to the target.


function twosum(arr, target) {
    let hashMap = new Map()
    let secondVar = -1
    for (let i = 0; i < arr.length; i++) {
        secondVar = hashMap.get(target - arr[i])
        if (secondVar != undefined) {
            return [secondVar, i]
        } else {
            hashMap.set(arr[i], i)
        }

    }
    return [-1, -1]
}

let a = twosum([2, 6, 5, 8, 11], 14);
let b = twosum([2, 6, 5, 8, 11], 15);
console.log(a, b);

// Additional test cases
let c = twosum([1, 2, 3, 4, 5], 9); // Expected output: [3, 4]
let d = twosum([3, 3], 6); // Expected output: [0, 1]
let e = twosum([-1, -2, -3, -4, -5], -8); // Expected output: [2, 4]
console.log(c, d, e);