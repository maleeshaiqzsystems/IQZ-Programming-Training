type Coordinate = [number,number]

function compareCoords( p1:Coordinate, p2:Coordinate):Coordinate{
    return [p1[0],p2[0]]
}

const coords:[number,number][]=[];

//union and intersection

interface Individual {
    name:string;
    birthday: Date;
}

interface Organization{
    companyName:string;
    workPhone:string;
}

type ContactType = Individual | Organization; //Union

type CompContact = Individual & Organization; //intersection

function addContact(contact: ContactType){
    if("birthday" in contact){
        console.log(contact.name,contact.birthday)
    }else{
        console.log(contact.companyName);
    }
}