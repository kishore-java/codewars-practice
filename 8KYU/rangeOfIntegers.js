
function generateRange(min, max, step){
    let arr =[];
      if((max - min) >= step){
        for(let i=min; i<=max ; i+=step){
          arr.push(i)
        }
      }
      return arr;
    }