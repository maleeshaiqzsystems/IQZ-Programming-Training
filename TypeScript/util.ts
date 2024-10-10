//named export

function add(x:number,y:number):number{
    return x+y
}

function sub(x:number,y:number):number{
    return x-y
}

export {add, sub}

// export function add(x:number,y:number):number{ //this also valid 
//     return x+y
// }

// exporty function sub(x:number,y:number):number{ //valid
//     return x-y
// }

function test(){
    return "test"
}

export function substract(x:number,y:number):number{
    return x-y
}

export default test; 

