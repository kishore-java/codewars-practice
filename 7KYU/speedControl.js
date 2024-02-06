function gps(s, x) {
    // your code
  if(x.length <= 1) return 0;
  let maxSpeed=0;
  for(let i=1; i < x.length; i++){
    const deltaDistance = x[i] - x[i-1];
  const speed = Math.floor((3600 * deltaDistance) / s); // Calculate average speed per hour
        
        maxSpeed = Math.max(maxSpeed, speed); 
  }
  return maxSpeed;
  
}
