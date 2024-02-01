function menFromBoys(arr){
    //your code here
    let men = arr.filter(ele => ele % 2 === 0).sort((a,b) => a-b);
    let boys = arr.filter(ele => ele % 2 !== 0).sort((b,a) => a -b);
    
    return [...new Set(men) , ...new Set(boys)]
  }