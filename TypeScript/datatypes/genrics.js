"use strict";
//generics
//using this we can pass a datatype to the claSS
class DataSorage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
}
const data = new DataSorage();
const data2 = new DataSorage();
data2.addItem({ name: "Maleesha", id: 2 });
console.log(data2.getItem(0)); //{ name: 'Maleesha', id: 2 }
function getValue(key, value1, value2) {
    if (key) {
        return value1;
    }
    return value2;
}
const n1 = 1;
const n2 = 2;
console.log(getValue("Hello", n1, n2)); //1
// or 
//console.log(getValue<string,number>("Hello",1,2));
