// Union of Two Sorted Arrays
// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m.Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

//     Examples
// Example 1:
// Input:
// n = 5, m = 5.
// arr1[] = { 1, 2, 3, 4, 5}
// arr2[] = { 2, 3, 4, 4, 5}
// Output:
// { 1, 2, 3, 4, 5 }

// Explanation: 
// Common Elements in arr1 and arr2  are: 2, 3, 4, 5
// Distnict Elements in arr1 are: 1
// Distnict Elemennts in arr2 are: No distinct elements.
// Union of arr1 and arr2 is { 1, 2, 3, 4, 5 } 

// Example 2:
// Input:
// n = 10, m = 7.
// arr1[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
// arr2[] = { 2, 3, 4, 4, 5, 11, 12}
// Output: { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 }
// Explanation: 
// Common Elements in arr1 and arr2  are: 2, 3, 4, 5
// Distnict Elements in arr1 are: 1, 6, 7, 8, 9, 10
// Distnict Elemennts in arr2 are: 11, 12
// Union of arr1 and arr2 is { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 } 

function unionArr(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let union = []
    function pushUnion(n) {
        let unionLen = union.length
        if (n && union[unionLen - 1] != n) {
            union.push(n)
        }
    }
    for (let i = 0; i < (len1 > len2 ? len1 : len2); i++) {
        if (arr1[i] == arr2[i]) {
            pushUnion(arr1[i])
        }
        else if (arr1[i] > arr2[i]) {
            pushUnion(arr2[i])
            pushUnion(arr1[i])
        }
        else {
            pushUnion(arr1[i])
            pushUnion(arr2[i])
        }
    }
    return union.sort((a, b) => a - b)
}

let a = unionArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
let b = unionArr([1, 2, 3, 4, 5], [2, 3, 4, 4, 5])
console.log(a, b)