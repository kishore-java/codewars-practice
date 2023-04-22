function quadrant(x, y) {
    // Poveli!
    [x,y]=[...arguments].map(ele=>Math.sign(ele));
    
    return (x==-1 && y==-1)? 3:(x==1 && y==-1)?4:(x==-1 && y==1)?2: 1
    
  }