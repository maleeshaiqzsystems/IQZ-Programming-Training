class Dog2 {
    static instanceCount: number =0;
    name:string;

    constructor(name:string){
        Dog2.instanceCount++;
        this.name=name;
    }
    static decreaseCount(){
        this.instanceCount--;
    }
}

const d1=new Dog2("Luna");
const d2=new Dog2("Broono");

console.log(Dog2.instanceCount); //2
Dog2.decreaseCount();
console.log(Dog2.instanceCount); //1