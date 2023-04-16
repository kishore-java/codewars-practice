
/*Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).*/

function minValue(values){
    //your code here
    return Number([...new Set(values.sort((a,b)=>a-b))].join(''))
  }