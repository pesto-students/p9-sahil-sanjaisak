/** 
 * Exercise 2
 * 
 * Create an object calledTeacherderived from thePersonclass, 
 * and implement a method calledteachwhich receives a string 
 * calledsubject, andprints out
 */  

var Person = function() {};

Person.prototype.initialize=function(name,age){
    this.name=name;
    this.age=age;
}

// TODO: create the class Teacher and a method teach
// start
var Teacher = function(){  
};

Object.setPrototypeOf(Teacher.prototype,Person.prototype); // setting prototype of person to teacher to extend 
Teacher.prototype.teach= function (subject){
    console.log(this.name,this.age);
    console.log(subject);
}
// end

var him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");