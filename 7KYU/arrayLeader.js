function arrayLeaders(arr){
    let numbers = [];
    for(let i=0; i < arr.length; i++){
      if(arr[i] > arr.slice(i+1).reduce((a,b) => a+b,0)){
        numbers.push(arr[i])
      }
    }
    return numbers;
  }