/**
 * It will return fibonacci series for the given param
 * @param count number of fibonacci values needed 
 * @returns iteration of fibonacci values
 */
const fibonacci =(count)=>({
    [Symbol.iterator](){
        let [i, result, previousValue] = [0,1,0];
     return{  
        next(){
        i++;
        if(i-1 <= 1) return {value: i-1, done: i > count};
        [previousValue, result] =[result, previousValue + result]; 
        return {value: result, done:  i > count};
    }}}
})

for(const value of fibonacci(10)){
    console.log(value);
}
