import {add,sub} from "./util"
import Anything from "./util"
//if two function have same name then use aliases. eg: import {add as addition} from "./util"
// import Anything, {add,sub} from "./util"  //this also valid

const results = add(1,2)
console.log(results); //3
console.log(Anything()) //test