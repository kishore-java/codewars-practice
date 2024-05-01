
function pyramid(n) {
    // your code here
    let arry = [];
    for(let i = 0 ; i < n ; i++){
     let arr = Array.from({ length: i+1 }, ( _ , i) => i ? 1 : 1);
      arry.push(arr)
    }
    return arry;
  }