let a =2; // don't need to explicitly define the type 

//a="hello"; //error
a=2;
a=-9;
a=Infinity;
a=-Infinity;
a=0.67;

let b: string;
let c=10;
b= "hello";
b="3";
b=`${c}`;

let d:boolean;

d=true;
d=false;

let result1 =null; //empty or non exist

let marks1 = undefined; // undefined is more used as a placeholder that means a variable has been declared but has not yet been assigned a value

let num1: number | undefined = undefined;

num1=2;
//num1="hello"; this makes an error

console.log(num1);

var arr =[1,2,3,4,5,"hello"];

var arr2: string[] []= [["hello"],["Maleesha","Madhuhansani"]] ;

console.log(arr2.length); //2

const coors: [number,number[]][]=[ 

	[1,[1,2]], 

    [-1,[3,4]] 

] 

console.log(coors[0][1]);

enum Size{
    Small,
    Medium,
    Large
}

var size : Size = Size.Small;
console.log(size) // 0

enum Size1{
    Small = 100,
    Medium,
    Large
}

var size2 : Size1 = Size1.Medium;
console.log(size2) // 101

enum Direction {
    Up ="UP",
    Down ="DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

var direction: Direction = Direction.Up;

console.log(direction);

let x: unknown =1 

if(typeof x =="number"){
    const res =x+1;
    console.log(res);
} // we have to specify the type or cast the type before use it when we use unknown 

//casting
let l: unknown =1 

 const r = (l as number) +1;
 console.log(r);

 const arr5= [{name:"tim"},{name:"joe"},{name:"jane"}]

 const el = arr5.pop()?.name
 console.log(el); //jane
 const el2 = arr5.pop()!.name