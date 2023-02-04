function createStack() {
    // Write your code here...
    // Answer
    let items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5 
stack.items;// => undefined
console.log(stack.items);
