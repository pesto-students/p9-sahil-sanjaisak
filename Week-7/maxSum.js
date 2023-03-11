/*
Problem 1: Max Sum Contiguous Subarray
Find the contiguous subarray within an array, A of length N which has the largest sum. Input Format:

The first and the only argument contains an integer array, A. Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:

Input 1: A = [1, 2, 3, 4, -10]

Output 1: 10

Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6

Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.
 */

function maximumSum(arr) {
    if (arr[0] <= 0) {
        arr.shift();
    } else if (arr[arr.length - 1] <= 0) {
        arr.pop();
    }

    let maxValue = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        if (sum <= 0) continue;

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxValue) maxValue = sum;
        }
    }
    return maxValue;
}
// console.log(maximumSum([-1, 2, -1, 3, -1, -4, 3, -1, 7]))
// time O(n^2)
// space O(1)





// kadane's algorithm which works only with subArrays
function maximum(arr) {
    let sumMaxArray = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (sumMaxArray < 0) {
            sumMaxArray = arr[i]
        } else {
            sumMaxArray = sumMaxArray + arr[i];
        }
        if (maxValue < sumMaxArray) {
            maxValue = sumMaxArray;
        }
    }
    return maxValue;
}
console.log(maximum([-1, 2, -1, 3, -1, -4, 3, -1, 7]));
// Time Complexity O(n)
// Space Complexity O(1)