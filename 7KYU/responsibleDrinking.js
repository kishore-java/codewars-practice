function hydrate(s) {
    // your code here
        // your code here
       let num = s.split('').filter( ele =>  !isNaN(ele)).reduce((ele,cu) => +cu + ele,0);
          return `${num > 1 ? `${num} glasses of water` : `${num} glass of water`}`;
      }
  

  hydrate("2 glasses of wine and 1 shot")