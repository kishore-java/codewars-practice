var makeBackronym = function(string){
    //your code here
    
    return string.split('').map(ele => dict[ele.toUpperCase()]).join(' ')
  };