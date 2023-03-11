// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order. Example 1:

//     Input: 
//     N = 5
//     arr[]= {0 2 1 2 0}
//     Output:
//     0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.

// Example 2:

//     Input: 
//     N = 3
//     arr[] = {0 1 0}
//     Output:
//     0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N) Expected Auxiliary Space: O(1)

// Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

// dutch national flag algorithm
function sort(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 2) {
            swap(arr, mid, high);
            high--;
        } else if (arr[mid] === 0) {
            swap(arr, mid, low);
            mid++;
            low++;
        } else {
            mid += 1;
        }
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(sort([2, 0, 1, 0, 2]))