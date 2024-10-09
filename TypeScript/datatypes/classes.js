"use strict";
class Person3 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}
const p1 = new Person3("Maleesha");
p1.greet();
