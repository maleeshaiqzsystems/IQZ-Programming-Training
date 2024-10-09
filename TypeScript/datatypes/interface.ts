interface Person{
    name: string;
    age:number;
    height?:number; //this property is optioanl
    hello:()=>void;
}

const person: Person = {
    name: "tim",
    age: 23,
    hello: function (){
        console.log(`hello ${this.name}`)
    }
}

console.log(person.name) //tim
person.hello() // hello tim

interface Employee extends Person {
    employeeId: number;
}

const worker: Employee = {
    name: "Tim",
    age: 23,
    height: 175,
    hello: function (){
        console.log(`hello ${this.name}`)
    },
    employeeId: 10

}

worker.hello();