function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            let temp;
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


let arr = [23,45,34,12,56,45,34];

console.log(sort(arr));

//we get a element of an array and check that with other elements. As soon as possible we find a minimum value than the element we swap those two elements.