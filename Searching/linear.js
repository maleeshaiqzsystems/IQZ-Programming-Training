function linearSearch(value, arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            return i;
        }
    }

    return "The value is not in the array!"
}

let arr = [2,5,12,87,45,34,89];

console.log(linearSearch(12,arr));