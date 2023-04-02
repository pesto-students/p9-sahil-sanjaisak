// Linked List
// Problem 1 : Reverse the Linked list
// Given a linked list of N nodes. The task is to reverse this list.

// Example 1:
// Input:
// LinkedList: 1->2->3->4->5->6
// Output: 6 5 4 3 2 1
// Explanation: After reversing the list, 
// elements are 6->5->4->3->2->1.
// Example 2:

// Input:
// LinkedList: 2->7->8->9->10
// Output: 10 9 8 7 2
// Explanation: After reversing the list,
// elements are 10->9->8->7->2.
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).

// Constraints: 1 <= N <= 104


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;
    let temp = { val: head?.val, next: null };
    head = head?.next;
    while (head != null) {
        temp = { val: head?.val, next: temp };
        head = head?.next;
    }
    return temp;
};
