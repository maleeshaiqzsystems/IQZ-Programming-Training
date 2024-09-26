let arr = [2,3,4,5,6,7]

//Mutator Methods (Modify the Original Array)

arr.push(8); //add a element at the end

arr.pop(); // remove the last element

arr.shift(); // remove the first element

arr.unshift(0); // add a element to the beggining

arr.unshift(1,2); // add two elements to the beggining

arr.splice(1,1, 'new'); //removes one element at index 1 and insterts 'new'   output ->  [ 1, 'new',0,3,4,5,6,7]
 
arr.sort((a,b)=>a-b); // sort the array and can take a comparison function    output ->  [0,1,2,3,4,5,6,7]

arr.reverse() // reverse the array

arr.copyWithin(2,5);  // The element 7 (at index 5) is copied to index 2.

let arr1 = [2,3,4,5,6,7]
arr1.copyWithin(2,3,5); //Elements 5 and 6 (from index 3 and 4) are copied. These elements are pasted starting at index 2, overwriting 4 and 5.  copyWithin(target, start, end)

arr.fill(0,2,4); // fill(value, start, end): Fills the array with a static value from start to end.


//Accessor Methods (Do Not Modify the Original Array)

let newArray = arr.concat([5,6]); //merge arr[5,6] to arr

arr.includes(2) //check whether 2 is an element or not of arr

arr.indexOf(2); //return the index of 2 or -1 if not found

arr.lastIndexOf(2); //Returns the index of the last occurrence of a specified value.

let arr2=arr.join('-') // join all elements of an array into a string output -> 7-6-0-0-0-2-1-0

arr2 = arr.slice(3,6); // returns the elements of index 3,4, and 5 output -> [ 0, 0, 2 ]

arr.toString(); //convert to a string  output ->  7,6,0,0,0,2,1,0 

let flatArr = [1, [2, [3, 4]]].flat(2); // [1, 2, 3, 4]

flatArr = [1, [2, [3, 4,[7,8]]]].flat(2); // [ 1, 2, 3, 4, [ 7, 8 ] ]

let flatMappedArr = flatArr.flatMap(x => [x * 2]); // multiply all the flatArr element by 2, and as last element is an array it retirns NaN    output ->  [ 2, 4, 6, 8, NaN ]



// Iteration Methods (Do Not Modify the Original Array)

//forEach(callback): Executes a function once for each array element.
arr.forEach(x => console.log(x));  // print all the elements

let arr4 = arr.map(x=>x*2); //Creates a new array by applying a function to each element. output -> [ 14, 12, 0, 0,  0,  4, 2, 0 ]

let filteredArray = arr.filter(x=>x>2); //  Creates a new array with elements that pass the test. output-> [7,6]

let sum = arr.reduce((acc, val) => acc + val, 0); //get the sum of all the elements               reduce(callback, initialValue)

sum = arr.reduceRight((acc, val) => acc + val, 0); //same as the reduce() but operate form right to left

arr.some(x => x > 2); // true or false   // test whether at least one element pass the test

arr.every(x => x > 2); // true or false //test whether all the elements pass the test

let found = arr.find(x => x > 2); //return the first element that pass the test

let foundIndex = arr.findIndex(x => x > 2); //Returns the index of the first element that satisfies the test function.

let iterator = Array.from(arr.entries()); //Returns an iterator object that contains key/value pairs for each element.

/*  output :  
[
  [ 0, 7 ], [ 1, 6 ],
  [ 2, 0 ], [ 3, 0 ],
  [ 4, 0 ], [ 5, 2 ],
  [ 6, 1 ], [ 7, 0 ]
]

*/


iterator = Array.from(arr.keys()); //Returns an iterator that contains the keys (indices) for each element.

/*
output : 
[
  0, 1, 2, 3,
  4, 5, 6, 7
]
*/


iterator = Array.from(arr.values()); //Returns an iterator that contains the values for each element.

/*
output:
[
  7, 6, 0, 0,
  0, 2, 1, 0
]

*/


Array.isArray(arr); // true or false     Checks if the value is an array.

let arrFrom = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

let arrOf = Array.of(1, 2, 3); // [1, 2, 3]

console.log(arrOf);




