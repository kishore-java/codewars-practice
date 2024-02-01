function solve(a,b){
    //..
     return   a.split('').filter(ele => !b.includes(ele)).join("") + b.split('').filter(ele => !a.includes(ele)).join("")
   };