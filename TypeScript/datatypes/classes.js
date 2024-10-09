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
class Person4 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const p2 = new Person4("Thisura");
console.log(p2.getName()); //Thisura
p2.setName("Piyath");
class Person6 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}
class Emp extends Person6 {
    callMe() {
        console.log(this.name);
    }
}
const p3 = new Person6("Maleesha");
const p4 = new Emp("Thisura");
p4.callMe(); //Thisura
class Person7 {
    constructor(name) {
        this.name = name;
        this.greet();
    }
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}
const p5 = new Person7("Madhuhansani");
