function newAvg(arr, navg) {
    // your code 
 if(arr.length === 0) return navg;
  const num = (navg)*(arr.length + 1) - arr.reduce((a,b) => a+b ,0)
  if(num <= 0) throw new Error('Expected New Average is too low')
  else return Math.ceil(num);
  
}