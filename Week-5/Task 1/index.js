/** 
 * getRandomNumbers generates random 
 * numbers in the range of 0 to 90 
 */
function* getRandomNumbers(){
    let number = 0;
    while(true){
        number = Math.round(Math.random() * 100);
        if(number < 90){
            yield number;
        }else{
            return;  
        }
        
    }
   
}

/** 
 * delay is used to delay the program
 * @param time used set delay time
 * @returns promise for time delay 
 */
async function delay(time){
    console.log(`Delay for time of ${time}ms `)
    const timeDelay = new Promise((resolve,rej)=>{
        setTimeout(()=>{
            resolve();
        },time);  
    })
   return timeDelay;
}

/**
 * task one give random numbers with in 90 
 * with a time gap of 3000ms 
 * @param {*} callback contains delay function 
 */
async function taskOne(callback){
    console.log("Task One has been called");
    for( let value of getRandomNumbers()){
       await callback;
        console.log(value);
    }
}

/**
 * task two give random numbers with in 90 
 * with a time gap of 2000ms 
 * @param {*} callback contains delay function 
 */
async function taskTwo(callback){
    console.log("Task two has been called");
    for( let value of getRandomNumbers()){
       await callback;
        console.log(value);
    }
}

/**
 * task three give random numbers with in 90 
 * with a time gap of 1000ms 
 * @param {*} callback contains delay function 
 */
async function taskThree(callback){
    console.log("Task three has been called");
    for( let value of getRandomNumbers()){
       await callback;
        console.log(value);
    }
}

/**
 * It executes all the task one by one
 * even it has different delays 
 */
async function executeTask(){

await taskOne(delay(3000));

await taskTwo(delay(2000));

await taskThree(delay(1000));

}

executeTask();