function bump(x){
    let count=0;
      x=x.split('')
      for(let i=0;i<x.length;i++){
        if(x[i]==='n'){
          count++;
        }
      }
     return count>15?"Car Dead":"Woohoo!"
    }