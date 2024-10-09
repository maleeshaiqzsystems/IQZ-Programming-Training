"use strict";
const person = {
    name: "tim",
    age: 23,
    hello: function () {
        console.log(`hello ${this.name}`);
    }
};
console.log(person.name); //tim
person.hello(); // hello tim
const worker = {
    name: "Tim",
    age: 23,
    height: 175,
    hello: function () {
        console.log(`hello ${this.name}`);
    },
    employeeId: 10
};
worker.hello();
