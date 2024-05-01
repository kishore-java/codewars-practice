
function solution(str){
    //check odd or even if odd convert to even;
   if(str.length % 2 != 0){
     str = str + '_';
   }
   let i = 0,arr = [];
   while(i < str.length){
     let stri = str[i] + str[i+1];
     arr.push(stri);
     i+= 2;
   }
   return arr;
 }