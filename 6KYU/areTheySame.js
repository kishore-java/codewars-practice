function comp(array1, array2){
    //your code here
    if(array1 === null || array2 === null) return false
    let arr1 = array1.sort((a,b) => a-b);
    let arr2 = array2.sort((a,b) => a-b);
    return arr1.every((ele,i) => ele*ele === arr2[i])
  }