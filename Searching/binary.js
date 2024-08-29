
function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=(i+1);j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    console.log(arr);
    return arr;
}



function binarySearch(arr,value){

    let low = 0;
    let high= arr.length-1;
    let middle;

    while(low<=high){
        middle = Math.floor((high+low)/2);

        if(arr[middle] === value){
            return middle;
        }else if(arr[middle]<value){
            low=middle+1;
        }else{
            high=middle-1;
        }
    
    }
    return "No value"
   
}


let arr = [12,34,10,55,43,23,67];
arr=sort(arr);
let index=binarySearch(arr,23);
console.log(index);

