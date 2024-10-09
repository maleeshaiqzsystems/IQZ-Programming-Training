"use strict";
class Cow {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`I am ${this.name} and ${this.color}`);
    }
    test() {
        return;
    }
}
class Cat {
    speak() {
        console.log("Meow");
    }
}
const cow = new Cow("Tim", "black");
const cat = new Cat();
const animal = cat;
const animals = [cat, cow];
function makeSound(animal) {
    animal.speak();
}
makeSound(cat); //Meow
