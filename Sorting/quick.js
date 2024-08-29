//complexity O(nlogn)

function partition(arr,l,h){
    const pivot = arr[h];

    let i = l-1;

    for(let j=l;j<h;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }

    [arr[i+1],arr[h]] = [arr[h],arr[i+1]];
    return i+1;

}


function sort(arr,l,h){
    if(l<h){
        let pi = partition(arr,l,h);
        sort(arr,l,pi-1);
        sort(arr,pi+1,h);
    }

    
}



let arr = [30,23,61,1,7,34,87,11];
sort(arr,0,arr.length-1);

console.log(arr);
