// Move all Zeros to the end of the array
// In this article we will learn how to solve the most asked coding interview problem: “Move all Zeros to the end of the array”

// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non - negative integers to the front by maintaining their order.

//     Examples
// Example 1:
// Input: 1, 0, 2, 3, 0, 4, 0, 1
// Output: 1, 2, 3, 4, 1, 0, 0, 0
// Explanation: All the zeros are moved to the end and non - negative integers are moved to front by maintaining order

// Example 2:
// Input: 1, 2, 0, 1, 0, 4, 0
// Output: 1, 2, 1, 4, 0, 0, 0
// Explanation: All the zeros are moved to the end and non - negative integers are moved to front by maintaining order

function moveZero(arr) {
    let a = arr.filter(ele => ele !== 0)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            a.push(0)
        }
    }
    return a
}
function moveZero1(a) {
    let n = a.length
    let j = -1;

    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements
    if (j === -1) return a;

    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }


    return a;
}

let a = moveZero1([1, 0, 2, 3, 0, 4, 0, 1])
let b = moveZero1([1, 2, 0, 0, 0, 1, 0, 4, 0])
console.log(a, b)