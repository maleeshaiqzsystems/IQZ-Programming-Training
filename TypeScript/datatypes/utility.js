"use strict";
//partioal
const updateTodo = (todo) => {
    todo.description = "abcd";
};
const myTodo = { title: "Learn TypeScript" }; //ypu cannot modify title
console.log(myTodo.title); //learn typescript
const pages = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
};
const pageNumbers = {
    0: { title: "Home" },
    1: { title: "About" },
    2: { title: "Contact" },
};
const todo3 = {
    title: "Clean room",
    completed: false
};
const todo4 = {
    id: 5
};
