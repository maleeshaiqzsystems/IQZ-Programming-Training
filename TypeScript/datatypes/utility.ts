//partioal

interface Todo {
    title: string;
    description: string;
}

const updateTodo = (todo: Partial<Todo>)=>{
    todo.description = "abcd"
}

//readonly

interface Todo1 {
    title: string;

}

const myTodo: Readonly<Todo1> = {title: "Learn TypeScript"}; //ypu cannot modify title
   
console.log(myTodo.title); //learn typescript

//record utility type

interface PageInfo {
    title : string;
}

const pages: Record<string, PageInfo> = {
    home: {title:"Home"},
    about: {title:"About"},
    contact: {title:"Contact"},
}


const pageNumbers: Record<number, PageInfo> = {
    0: {title:"Home"},
    1: {title:"About"},
    2: {title:"Contact"},

}

//pick utility type

interface Todo3 {
    id: number;
    title: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo3, "title"| "completed">;

const todo3: TodoPreview={
    title: "Clean room",
    completed: false
}

//Omit utility type

interface Todo4 {
    id: number;
    title: string;
    completed: boolean;
}

type TodoPreview2 = Omit<Todo3, "title"| "completed">;

const todo4: TodoPreview2={
    id:5
}