type StringOrNumber = string|number;

function add1(value:StringOrNumber): StringOrNumber{
    if (typeof value ==="string"){
        return value+1
    }else{
        return value+1
    }
}

class Student{
    fristname: string;
    lastname : string;

    constructor(firstname:string, lastname:string){
        this.fristname=firstname;
        this.lastname=lastname;
    }
}

class Teacher{
    firstname: string;

    constructor(firstname:string, lastname:string){
        this.firstname=firstname;
    }
}

function getName(person: Student | Teacher){
    if( person instanceof Student){
        console.log("Student");
    }else{
        console.log("Teacher")
    }
}

function chack(person: Student | Teacher){
    if("lastname" in person){
        console.log("Student");
    }else{
        console.log("Teacher")
    }
}

function isStudent(person: Student | Teacher): person is Student {
    return (person as Student).lastname !== undefined
}


