import Queue from "./Queue.js";

const fruits = new Queue();

fruits.enqueue("Banana");
fruits.enqueue("Apple");
fruits.enqueue("Orange");
fruits.enqueue("Pineapple");
console.log(fruits);
console.log(`Size is ${fruits.getSize()}`);
fruits.dequeue();
console.log(fruits);
console.log(`First item is ${fruits.peek()}`);
fruits.dequeue();
console.log(fruits);
console.log(`Size is ${fruits.getSize()}`);
console.log(`Queuse is Empty:   ${fruits.isEmpty()}`);


