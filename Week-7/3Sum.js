/**
 Problem 6 : 3 sum
 
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, 
 target.Return the sum of the three integers.Assume that there will only be one solution
 
 Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 */

// slider window 
function closest(arr, target) {
    let lastIndex = 3;
    let firstIndex = 0
    let result = arr[0] + arr[1] + arr[2];
    let closest = result;

    while (lastIndex < arr.length) {
        result += arr[lastIndex] - arr[firstIndex];
        lastIndex++;
        firstIndex--;
        if (result < closest && result > target || result === target || result > closest && result < target) {
            closest = result;
        }
    }

    return closest;

}
console.log(closest([-1, -4, 2, 2], 2));
// Time O(n)
// Space O(1)
