"use strict";
class Dog2 {
    constructor(name) {
        Dog2.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}
Dog2.instanceCount = 0;
const d1 = new Dog2("Luna");
const d2 = new Dog2("Broono");
console.log(Dog2.instanceCount); //2
Dog2.decreaseCount();
console.log(Dog2.instanceCount); //1
