
function sumOfNumbers(start , last){
    let sum = 0;
    for(let i=start ; i<=last ; i++){
            sum+=i
    }
    return sum
}

let summ = sumOfNumbers(1,100);
console.log(summ)