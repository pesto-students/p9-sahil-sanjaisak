/** Create a memoize function that remembers previous inputs and stores them in cacheValue so that itwon’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method */
// Contains value of the given numbers to add in cacheValue 
const cacheValue = {};

/** Solution*/
function memoizeAdd() {
    const arg = JSON.stringify(arguments);
    const sum = cacheValue[arg];
    if (sum) {
        return sum;
    }
    const resulted = add([...arguments]);
    cacheValue[arg] = resulted;
    return resulted;
}

//Given reducer method:
function add(value) {
    return value.reduce((total, number) => total + number);
}

//then calling...
console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd();

//returns 200
console.time();
console.log(memoizeAdd(100));
console.timeEnd();

//returns 100
console.time();
console.log(memoizeAdd(100, 200));
console.timeEnd();

//returns 300
console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd();
//returns 200 without computing

