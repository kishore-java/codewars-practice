function rgb(r, g, b) {
    if(r < 0 ) r=0;
    if(g < 0) g=0;
    if(b < 0) b=0;
    if(r > 255) r=255;
    if(g > 255) g=255;
    if(b > 255) b=255;
    
    let hexR = r.toString(16).padStart(2,'0');
    let hexG = g.toString(16).padStart(2,'0');
    let hexB = b.toString(16).padStart(2,'0');
      var str =hexR+hexG+hexB;
      return str.toUpperCase();
  }