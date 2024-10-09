interface Animal2{
    speak():void
}

class Cow implements Animal2 {
    private name: string;
    private color: string;

    constructor(name:string, color:string){
        this.name = name;
        this.color= color
    }
    speak() {
       console.log(`I am ${this.name} and ${this.color}`)
    }

    test(){
        return
    }
}

class Cat implements Animal2{
    speak(){
        console.log("Meow");
    }
}

const cow = new Cow("Tim","black");
const cat = new Cat();

const animal: Animal2 = cat;
const animals: Animal2[] =[cat,cow]

function makeSound(animal:Animal2){
    animal.speak()
}

makeSound(cat); //Meow