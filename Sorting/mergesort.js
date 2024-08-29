function merge(arr,low,mid,high){
    const n1 = mid-low+1; // number of elements of left array
    const n2=high-mid; //number of elements in right array

    let L=new Array(n1); // temp array for left array
    let R=new Array(n2); // temp array for right array

    for(let i=0;i<n1;i++){ // add elements of left array to temp array
        L[i] = arr[low+i];
    }

    for(let j=0;j<n2;j++){ // add elements of right array to temp array
        R[j]=arr[mid+1+j];
    }

    let i=0;
    let j=0;
    let k=low;

    while(i<n1 && j<n2){    // compare two left and right array and add elements to the arr again in correct order
        if(L[i]<=R[j]){
            arr[k] = L[i];
            i++;
        }else{
            arr[k] = R[j];
            j++;
        }

        k++;
    }

    while(i<n1){            // if left array has remaining elements copy them to the array
        arr[k]=L[i];
        i++;
        k++;
    }

    while(j<n2){               // if right array has remaining elements copy them to the array
        arr[k]=R[j];
        j++;
        k++;
    }

    
}


function mergesort(arr,low,high){

    if(low>=high){
        return
    }

    const mid = Math.floor(low + (high - low) / 2);
    mergesort(arr,low,mid);
    mergesort(arr,mid+1,high);
    merge(arr,low,mid,high);

}

function printArray(arr){
    let arrlist='';
    for(let i=0;i<arr.length;i++){
        arrlist+=arr[i]+" ";
    }

    console.log(arrlist);
}


let arr = [2,7,12,89,34,67,23];
mergesort(arr,0,arr.length-1);

printArray(arr);



//complexity o(nlogn)