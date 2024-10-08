"use strict";
var _a;
let a = 2; // don't need to explicitly define the type 
//a="hello"; //error
a = 2;
a = -9;
a = Infinity;
a = -Infinity;
a = 0.67;
let b;
let c = 10;
b = "hello";
b = "3";
b = `${c}`;
let d;
d = true;
d = false;
let result1 = null; //empty or non exist
let marks1 = undefined; // undefined is more used as a placeholder that means a variable has been declared but has not yet been assigned a value
let num1 = undefined;
num1 = 2;
//num1="hello"; this makes an error
console.log(num1);
var arr = [1, 2, 3, 4, 5, "hello"];
var arr2 = [["hello"], ["Maleesha", "Madhuhansani"]];
console.log(arr2.length); //2
const coors = [
    [1, [1, 2]],
    [-1, [3, 4]]
];
console.log(coors[0][1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var size = Size.Small;
console.log(size); // 0
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 100] = "Small";
    Size1[Size1["Medium"] = 101] = "Medium";
    Size1[Size1["Large"] = 102] = "Large";
})(Size1 || (Size1 = {}));
var size2 = Size1.Medium;
console.log(size2); // 101
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(direction);
let x = 1;
if (typeof x == "number") {
    const res = x + 1;
    console.log(res);
} // we have to specify the type or cast the type before use it when we use unknown 
//casting
let l = 1;
const r = l + 1;
console.log(r);
const arr5 = [{ name: "tim" }, { name: "joe" }, { name: "jane" }];
const el = (_a = arr5.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(el); //jane
const el2 = arr5.pop().name;
