/**
 * contains states of promise in promise
 */
const state ={
    /**
     * its is a state of promise that it is pending
     */
    Pending:"pending",
    /**
     * its is a state of promise that it is fulFilled
     */
    FulFilled:"fulFilled",
    /**
     * its is a state of promise that it is rejected
     */
    Rejected:"rejected"
}
class CustomPromise {
    constructor(callBackFn){
        // by default it make the state pending on creation &#2B50 
        this.state = state.Pending;
        try{
            callBackFn(this.resolve,this.reject);
        }catch(err){
            console.log(err);
        } 
    }

    resolve = (value)=>{
        // if resolved sets fulfilled state   
        this.value = value;
        this.state = state.FulFilled;
    }

    reject = (error)=>{
        // if rejected sets Rejected state 
        this.error = error;
        this.state = state.Rejected;
    }

    then(OnSuccess, _OnFail){
        const interval = setInterval(()=>{
            if(this.state !== state.Pending){
                clearInterval(interval);
                if (this.state === state.FulFilled){
                    OnSuccess(this.value);  
                }else if(_OnFail){
                    _OnFail(this.error);
                } 
            }
        },0);
        return this;  
    }

    catch(OnFail){
        const interval = setInterval(()=>{
            if(this.state !== state.Pending){
                clearInterval(interval);
            if (this.state === state.Rejected){
                OnFail(this.error);
            }
        }
    },0);
    return this;
  }

}

/**
 * This function is used to generate random number
 * @returns random number from 0 to 100
 */
function getNumber(){
    return Math.round(Math.random() * 100);
}
const [resolveTime,rejectionTime] = [1000,2000];

// With JS Promise
const promise  =  new Promise((resolve,reject)=>{
    const randomNumber = getNumber(); 
    if ( randomNumber % 5 === 0){
        setTimeout(()=>{
            reject(`${randomNumber} is rejected with setTimeOut using Js Promise`);
        },rejectionTime);
        
    }else{
    setTimeout(()=>{
        resolve(`${randomNumber} is resolved with setTimeOut using Js Promise`);
    },resolveTime);
}
}) ;

promise.then(console.log).catch(console.log);

// with setTimeOut
const customPromiseOne = new CustomPromise((resolve,reject)=>{
    const randomNumber = getNumber(); 
    if ( randomNumber % 5 === 0){
        setTimeout(()=>{
            reject(`${randomNumber} is rejected with setTimeOut using custom promise`);
        },rejectionTime);
        
    }else{
    setTimeout(()=>{
        resolve(`${randomNumber} is resolved with setTimeOut using custom promise`);
    },resolveTime);}
});

customPromiseOne.then(console.log).catch(console.log);

//without setTimeout
const customPromiseTwo = new CustomPromise((resolve,reject)=>{
    const randomNumber = getNumber(); 
    if ( randomNumber % 5 === 0){
        reject(`${randomNumber} is rejected without setTimeOut using custom promise`);    
    }else{
        resolve(`${randomNumber} is resolved without setTimeOut using custom promise`);
    }  
});

customPromiseTwo.then(console.log).catch(console.log);
