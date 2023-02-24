function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    };
    let message = `Count is ${count}`;// this will be set 0 on the start and it will not be changed till the end
    function log() {
        console.log(message);
    };
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

/** Output will be Count is 0 */


