function highestRank(arr){
    var obj = {};
    arr.forEach(function(elem){
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });
    var keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function(elem){
       if(obj[elem] >= highest)
       {
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
  }