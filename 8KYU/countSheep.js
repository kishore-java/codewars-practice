var countSheep = function (num){
    //your code here
     if(!num) return ''
    let count="";
    for(let i=1;i<=num;i++){
       count+=`${i} sheep...`
    }
    return count
  }