
function mygcd(x,y){
    //your code here
     if(x%y === 0) return y
      let z =y ;
      let p=Math.floor(x %y);
     return mygcd(z,p)
  }