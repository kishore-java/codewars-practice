function catMouse(x){
    const im = x.indexOf('m');
      const ic = x.indexOf('C')
      return im - ic <= 4 ? "Caught!" : "Escaped!";
    }