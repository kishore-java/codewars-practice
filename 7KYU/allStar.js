var removeVowels = function(str){
    //code here
      return str.split('').filter(ele =>  !'AEIOUaeiou'.includes(ele)).join('')
    
    }