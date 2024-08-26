export default class Queue {
    constructor(){
        this.items=[];
        this.count=0;
    }

    enqueue(item){
        this.items.push(item);
        this.count+=1;
    }

    dequeue(){
        return this.items.shift();

    }

    peek(){
        if(this.items.length>0){
            return this.items[0];
        }else{
            return null;
        }
        
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.getSize() ===0;
    }
}
