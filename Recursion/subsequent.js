function generateSubsequences(str,arr){  
    if(str.length===0){
        arr.push("");
        return;
    }else{
        // arr.push(str);
        generateSubsequences(str.slice(1),arr); // add all the subsequences withput "a"(str[0])

        const subsequencesWithFirstChar = arr.map(subseq => str[0] + subseq); // concat all the subsequences with "a"
        arr.push(...subsequencesWithFirstChar); // merge two arrays.
    }

    return arr;

    // console.log(arr);
}

let arr=[];
const newArray =generateSubsequences("abc",arr);
console.log(newArray);