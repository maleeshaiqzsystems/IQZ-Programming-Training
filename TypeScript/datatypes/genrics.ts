
//generics
//using this we can pass a datatype to the claSS

class DataSorage<T>{
    private items: T[]=[]

    addItem(item:T):void{
        this.items.push(item);
    }
    getItem(index:number):T{
        return this.items[index];
    }

    removeItem(index:number):void {
        this.items.splice(index,1);
    }
}

const data = new DataSorage<string>();

interface User{
    name: string,
    id:number
}

const data2 = new DataSorage<User>();
data2.addItem({name:"Maleesha",id:2});
console.log(data2.getItem(0)); //{ name: 'Maleesha', id: 2 }

function getValue<K,V>(key:K, value1:V, value2:V ):V{
    if(key){
        return value1;
    }
    return value2;
}

const n1:number=1;
const n2:number=2;
console.log(getValue("Hello",n1,n2)); //1
// or 
//console.log(getValue<string,number>("Hello",1,2));