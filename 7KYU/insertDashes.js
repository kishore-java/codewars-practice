function insertDash(num) {
    //code me
   let numStr = String(num);
   let result = ''
   for(let i=0 ; i<numStr.length; i++){
     if(i > 0 && parseInt(numStr[i-1]) % 2 !== 0 && parseInt(numStr[i]) % 2 !== 0){
       result +='-'
     }
     result+=numStr[i]
   }
   return result;
 }