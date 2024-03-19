// Longest Consecutive Sequence in an Array
// Problem Statement: You are given an array of ‘N’ integers.You need to find the length of the longest sequence which contains the consecutive elements.

//     Examples
// Example 1:

// Input: [100, 200, 1, 3, 2, 4]

// Output: 4

// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6]

// Output: 4

// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.

function longestConsecutive(arr) {
    let n = a.length;
    if (n === 0)
        return 0;
    let longest = 1;
    let hMap = new Set()
    for (let i = 0; i < arr.length; i++) {
        hMap.add(arr[i])
    }
    for (let it of hMap) {
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;




}