function divisibleByThree(str){
    return str.split('').reduce((a,b) => +b + +a ,0)%3 === 0 
    }