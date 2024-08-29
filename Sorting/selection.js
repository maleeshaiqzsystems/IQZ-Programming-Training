function sort(arr){
    let minIndex;
    for(let i=0;i<arr.length;i++){
        minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j; 
            }
        }

        if(minIndex!==i){
            let temp=arr[minIndex]
            arr[minIndex]=arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

let arr = [34,34,56,12,45,35,78,56];
console.log(sort(arr));



//in selection sort first we assume one of the element is the minimum value. Then compare with all other elements and find the minimum element. 
//if that element is not equal to the current minimum value, then swap.

