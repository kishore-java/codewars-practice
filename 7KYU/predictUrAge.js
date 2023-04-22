function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let result = [...arguments].map(ele => ele*ele).reduce((ac,cu)=> cu+ac,0);
   result= Math.sqrt(result)/2 
    return Math.floor(result)
    
  }