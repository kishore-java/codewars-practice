function boredom(staff){
    const scoreObj = {
      accounts : 1,
  finance : 2,
  canteen : 10,
  regulation : 3,
  trading : 6,
  change : 6,
  IS : 8,
  retail : 5,
  cleaning : 4,
  'pissing about' : 25
    }
    let scoreArr = [];
    for (const key in staff){
      scoreArr.push(scoreObj[staff[key]])
    }
    let score
   =scoreArr.reduce((a,b) => a+b);
    
    
    if(score <= 80) return 'kill me now';
  if(score < 100 && score > 80) return 'i can handle this';
  if(score >100) return 'party time!!'
  }