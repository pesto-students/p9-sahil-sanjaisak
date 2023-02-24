// Create 3 simple functions where call, bind and apply are used. The intention of this exercise is to understand how they work and their differences.

const personalData = {
    name: "sanjai",
    age: "16",
    bloodGroup: "O+"
}

const academics = {
    subject: ["english", "maths", "science", "tamil", "social"]
}

const student = {
    standard: "X",
    selection: 'A',
    age: 20,
    getData: function getUserData(message) {
        return `${message ? message : ''}${this.name} your are age is ${this.age} and your blood group is ${this.bloodGroup} `
    },
    total: function getTotal(name, marks) {
        let totalMarks = marks.reduce((total, mark) => total + mark);

        return `${name} was reading ${this.subject} and at the end he got a total of ${totalMarks}`
    }
}

console.log("Calling function without call, bind, apply: ", student.getData());

/**  This is an example of bind method which is used to bin an object so it will make this object as local scope */
const exampleForBind = student.getData.bind(personalData);
console.log("This is an example of Bind: %c" + exampleForBind(), 'color: blue;');

/** This is an example of call method which is used to call a function with a object and arguments so it will make this object as local scope */
console.log("This is an example of Call: %c" + student.getData.call(personalData, "this is the data "), 'color: blue;');


/** This is an example of apply method which is used to call a function with a object and array of arguments so it will make this object as local scope */
console.log("This is an example of Apply: %c" + student.total.apply(academics, ['sanjai', [90, 70, 80, 90, 100]]), 'color: blue;');

