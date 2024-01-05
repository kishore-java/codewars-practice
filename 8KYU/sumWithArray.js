 
     function sumArray(array) {
        if( array === null || array === undefined ) return 0
          if(array.length <=2 ) return 0
          array=array.sort((a,b)=> a-b).slice(1,array.length-1)
          
          
          let sumy = array.reduce((a,b) => a+b)
          return sumy;
          
        }