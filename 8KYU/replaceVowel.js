function replace(s){
    //coding and coding....
  
    return s.split('').map(ele => 'aeiou'.includes(ele.toLowerCase())? '!': ele).join('')
    
    
  }