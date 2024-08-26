// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is considered valid if brackets are closed in the correct order.

const readline= require('readline');

class Parentheses {
    constructor(){
        this.elements=[];
        this.count=0;
    }

    push(value){
        this.elements[this.count]= value;
        this.count+=1;

        console.log(this.elements[this.count-1]);

    }

    peek(){
        if(this.count>0){
            return this.elements[this.count-1]
        }
        
    }

    pop(){

        if(this.count>0){
            this.count-=1;
        }
        
    }


}


checkString=(answer) =>{
    const stack= new Parentheses();
    let count=0;
    let paraStr='';

    const matchingBrackets = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    let para1 =['[','{','('];
 
      // Ask the user a question
        // Close the interface
        console.log(answer);

        for(let i=0;i<answer.length;i++){
            if(para1.includes(answer[i])){
                stack.push(answer[i]);
                count++;
                
            }else{
                let value=stack.peek();
                if(value!=matchingBrackets[answer[i]] || count==0 ){
                    
                    return false;
                }else{
                    stack.pop();
                    count--;
                }
            }
        }

  
        return count===0;

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

rl.question('What is the string? ', (answer) => {
    // Close the interface
    const valid = checkString(answer)
    console.log("string is ",valid );
    rl.close();
  }); 




