class Person3 {
    public name: string;
    constructor(name: string){
        this.name = name 
    }
    greet(){
        console.log(`hello my name is ${this.name}`)
    }

}

const p1= new Person3("Maleesha");
p1.greet();