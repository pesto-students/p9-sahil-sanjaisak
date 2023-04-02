// Problem 2: Rotate Linked List
// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to length of the linked list. Example 1:

// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:
// Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
// Example 2:

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output: 5 6 7 8 1 2 3 4
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).

// Constraints: 1 <= N <= 103 1 <= k <= N

rotateRight = function (head, k, length) {

    k = k % length;

    let ptr = head;

    for (let i = 1; i < length; i++) {
        ptr = ptr.next
    }
    ptr.next = head;
    for (let i = 1; i <= k; i++) {
        ptr = ptr.next
        if (i == k) {
            head = ptr.next;
            ptr.next = null;
        }
    }
    return head;

};

console.log(JSON.stringify(rotateRight({ val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } }, 2, 4)));

