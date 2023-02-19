mathOperations  = require('./index.js');

describe("index",()=>{
    describe("sum()",()=>{
        test("should return sum of two numbers",()=>{
            const result = mathOperations.sum(1,1);
            expect(result).toEqual(2);
        });
        
        test("should return Nan if one of the value is undefined",()=>{
            const result = mathOperations.sum(undefined,1);
            expect(result).toEqual(NaN);
        });
    
        test("should return Nan if value is undefined",()=>{
            const result = mathOperations.sum(undefined);
            expect(result).toEqual(NaN);
        });
    });
    
    describe("diff()",()=>{
        test("should return diff of two numbers",()=>{
            const result = mathOperations.diff(1,1);
            expect(result).toEqual(0);
        });
        
        test("should return Nan if one of the value is undefined",()=>{
            const result = mathOperations.diff(undefined,1);
            expect(result).toEqual(NaN);
        });
    
        test("should return Nan if value is undefined",()=>{
            const result = mathOperations.diff(undefined);
            expect(result).toEqual(NaN);
        });
    });
    
    
    describe("product()",()=>{
        test("should return product of two numbers",()=>{
            const result = mathOperations.product(1,1);
            expect(result).toEqual(1);
        });
        
        test("should return Nan if one of the value is undefined",()=>{
            const result = mathOperations.product(undefined,1);
            expect(result).toEqual(NaN);
        });
    
        test("should return Nan if value is undefined",()=>{
            const result = mathOperations.product(undefined);
            expect(result).toEqual(NaN);
        });
    });
});
