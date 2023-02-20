class customSet{
    constructor(arr){

        const array = arr.filter((item,index)=>{
            return arr.indexOf(item) === index;
        });

        array.forEach((value,index) => {
            this[index] = value;
        });  
        
        Object.defineProperty(this,'size',{
        value: array.length,
        writeable: false,
        enumerable: false,
        configurable: false
    });
    }
}

const hasDuplicate = arr => {
    return new customSet([1,5,-1,4]).size !== arr.length
}
console.log(hasDuplicate([1,5,-1,4]))// false