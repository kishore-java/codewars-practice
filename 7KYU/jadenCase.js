String.prototype.toJadenCase = function () {
    //...
    return this.split(' ').map(function(ele){
      return ele[0].toUpperCase()+ele.slice(1)
    }).join(' ')
    
  };