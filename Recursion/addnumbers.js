function getSum(number,sum){

    if(number.length===0){
        return sum;
    }

    sum+=Number(number[0]);
    
    return getSum(number.slice(1),sum);

}

let sum =0;
console.log(getSum("234567",sum));