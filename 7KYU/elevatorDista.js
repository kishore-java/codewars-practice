function elevatorDistance(arr) {
    // your code here
    let arrp=[];
    for(let i=0;i<arr.length-1 ; i++){
     arrp.push( Math.abs(arr[i+1] - arr[i]))
    }
    return arrp.reduce((a,b) => a+b)
  }