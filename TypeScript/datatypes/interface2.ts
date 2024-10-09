interface Person1{
    name: string;
    age:number;
    height?:number; //this property is optioanl
}

interface Employee1 {
    employeeId: number;
}

interface Manager1 extends Employee1, Person1 {
    employees : Person1[];
}

const manager : Manager1 = {
    name: "Tim",
    age: 23,
    employeeId:10,
    employees:[]

}

function getPerson(p:Person1): Person1{
    return{
        name:"Tim",
        age:23
    }
}

const res = getPerson(manager);
console.log(res) //{ name: 'Tim', age: 23 }


