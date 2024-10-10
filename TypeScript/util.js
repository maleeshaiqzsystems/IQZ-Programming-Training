"use strict";
//named export
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.substract = substract;
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
// export function add(x:number,y:number):number{ //this also valid 
//     return x+y
// }
// exporty function sub(x:number,y:number):number{ //valid
//     return x-y
// }
function test() {
    return "test";
}
function substract(x, y) {
    return x - y;
}
exports.default = test;
