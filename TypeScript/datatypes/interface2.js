"use strict";
const manager = {
    name: "Tim",
    age: 23,
    employeeId: 10,
    employees: []
};
function getPerson(p) {
    return {
        name: "Tim",
        age: 23
    };
}
const res = getPerson(manager);
console.log(res); //{ name: 'Tim', age: 23 }
