// Find the number that appears once, and the other numbers twice
// Problem Statement: Given a non - empty array of integers arr, every element appears twice except for one.Find that single one.

//     Examples
// Example 1:
// Input Format: arr[] = { 2, 2, 1}
// Result: 1
// Explanation: In this array, only the element 1 appear once and so it is the answer.

//     Example 2:
// Input Format: arr[] = { 4, 1, 2, 1, 2}
// Result: 4
// Explanation: In this array, only element 4 appear once and the other elements appear twice.So, 4 is the answer.
function findSingleNumber(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

function findSingleNumber(arr) {
    let hashMap = new Map()
    for (let index = 0; index < arr.length; index++) {
        hashMap.set(arr[index], hashMap.get(arr[index] || 0) + 1)
    }
    // for (const [num, count] of hashmap) {
    //     if (count === 1) {
    //         return num;
    //     }
    // }
    let missingVal = hashMap.entries.find(elem => {
        let(key, val) = elem
            (val === 1)
    })
    return missingVal
}