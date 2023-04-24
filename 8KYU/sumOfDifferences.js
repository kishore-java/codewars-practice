function sumOfDifferences(arr) {
    if (arr.length===0){
      return 0
  }
    arr=arr.sort((a,b)=>b-a)
    let sum=0
    for(let i=0; i<arr.length;i++){
      if (arr[i] === arr[arr.length-1]) break;
        sum+=arr[i]-arr[i+1]
  }
    return sum
  }