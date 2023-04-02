// Problem 3: Implement a Queue using 2 stack
// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the poped element)

// Example 1:
// Input:
// 5
// 1 2 1 3 2 1 4 2

// Output: 
// 2 3

// Explanation: 
// In the first testcase
// 1 2 the queue will be {2}
// 1 3 the queue will be {2 3}
// 2   poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2   poped element will be 3.
// Example 2:
// Input:
// 4
// 1 2 2 2 1 4
// Output: 
// 2 -1
// Explanation: 
// In the second testcase 
// 1 2 the queue will be {2}
// 2   poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1
// 1 4 the queue will be {4}.
// Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()
// Expected Auxilliary Space : O(1).

// Constraints: 1 <= Q <= 100 1 <= x <= 100

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};


MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};


MyQueue.prototype.pop = function () {
    while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
    }
    const result = this.stack1.pop();
    while (this.stack2.length >= 1) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};


MyQueue.prototype.peek = function () {
    while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
    }
    const result = this.stack1.pop();
    this.stack2.push(result);

    while (this.stack2.length >= 1) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.empty = function () {
    return !this.stack1.length
};

let q = new MyQueue();
q.push(1);
q.push(3);
q.push(2);
console.log(q.peek());
console.log(q.pop());
console.log(q.pop());