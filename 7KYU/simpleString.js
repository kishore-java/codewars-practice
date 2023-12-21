function solve(s){
    //..
     let u=0;
     let l=0;
     let n=0;
     let p=0;
     let str ='1234567890';
     let lowCas="abcdefghijklmnopqrstuvwxyz";
     let highCas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let sArr=s.split('');
     console.log(sArr)
     let arr= sArr.forEach((ele) =>{
              
   
       if(str.indexOf(ele) !== -1){
         n++;
       } 
       else if(lowCas.indexOf(ele) !== -1){
         l++
         
       }else if(highCas.indexOf(ele) !== -1){
         u++
       }else{
         p++
       }
     })
     
     return [u,l,n,p]
   }