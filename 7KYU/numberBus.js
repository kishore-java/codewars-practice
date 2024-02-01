var number = function(busStops){
    // Good Luck!
   const a =  busStops.map((ele) => ele[0]).reduce((a,b) => a+b ,0);
    const b = busStops.map((ele ) => ele[1]).reduce((a,b) => a+b,0)
    return a - b;
    
  }