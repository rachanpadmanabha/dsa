// Find Second Smallest and Second Largest Element in an array
// Problem Statement: Given an array, find the second smallest and second largest element in the array.Print ‘-1’ in the event that either of them doesn’t exist.

//     Examples
// Example 1:
// Input: [1, 2, 4, 7, 7, 5]
// Output: Second Smallest: 2
// 	Second Largest: 5
// Explanation: The elements are as follows 1, 2, 3, 5, 7, 7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest: -1
// 	Second Largest: -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array.There is no second largest or second smallest element present.


function findSeconds(arr) {
    let len = arr.length
    if (len < 3) {
        return [-1]
    }
    let a = arr.sort((a, b) => a - b).filter((_el, i) => arr[i] != arr[i + 1])
    console.log(a)
    return [a[a.length - 2], a[1]]
}

function withoutSort(arr) {
    let len = arr.length
    if (len < 3) {
        return [-1]
    }
    let second_small = Infinity
    let second_large = -Infinity
    let small = Infinity
    let large = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            second_small = small;
            small = arr[i];
        } else if (arr[i] < second_small && arr[i] !== small) {
            second_small = arr[i];
        }
        if (arr[i] > large) {
            second_large = large;
            large = arr[i];
        } else if (arr[i] > second_large && arr[i] !== large) {
            second_large = arr[i];
        }
    }
    return [second_large, second_small]
}

let a = withoutSort([1, 2, 4, 7, 7, 5])
let b = withoutSort([1])
console.log(a, b)