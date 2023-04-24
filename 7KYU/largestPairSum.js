function largestPairSum (numbers) {
    //TODO: Write your Code here
   return numbers.sort((a,b)=> b-a).slice(0,2).reduce((ac,cu)=> ac+cu)
  }