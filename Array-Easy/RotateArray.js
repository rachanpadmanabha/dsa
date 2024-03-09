// Rotate array by K elements
// Rotate array by K elements

// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

//     Examples:

// Example 1:
// Input: N = 7, array[] = { 1, 2, 3, 4, 5, 6, 7}, k = 2, right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position.

//     Example 2:
// Input: N = 6, array[] = { 3, 7, 8, 9, 10, 11}, k = 3, left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.
function rotate1(arr, n, direction) {
    if (direction == 'left') {
        for (let i = 0; i < n; i++) {
            let temp = arr.shift()
            arr.push(temp)
        }
    }
    if (direction == 'right') {
        for (let i = 0; i < n; i++) {
            let temp = arr.pop()
            arr.unshift(temp)
        }
    }
    return arr
}

function rotate(arr, n, direction) {
    let len = arr.length
    let a = []
    if (direction == 'left') {
        for (let i = n; i < len; i++) {
            a.push(arr[i])
        }
        for (let i = 0; i < n; i++) {
            a.push(arr[i])
        }
    }
    if (direction == 'right') {
        for (let i = len - n; i < len; i++) {
            a.push(arr[i])
        }
        for (let i = 0; i < len - n; i++) {
            a.push(arr[i])
        }
    }
    return a
}

let a = rotate1([1, 2, 3, 4, 5, 6, 7], 2, 'right')
let b = rotate1([3, 7, 8, 9, 10, 11], 3, 'left')
console.log(a, b)