"use strict";
function add1(value) {
    if (typeof value === "string") {
        return value + 1;
    }
    else {
        return value + 1;
    }
}
class Student {
    constructor(firstname, lastname) {
        this.fristname = firstname;
        this.lastname = lastname;
    }
}
class Teacher {
    constructor(firstname, lastname) {
        this.firstname = firstname;
    }
}
function getName(person) {
    if (person instanceof Student) {
        console.log("Student");
    }
    else {
        console.log("Teacher");
    }
}
function chack(person) {
    if ("lastname" in person) {
        console.log("Student");
    }
    else {
        console.log("Teacher");
    }
}
function isStudent(person) {
    return person.lastname !== undefined;
}
