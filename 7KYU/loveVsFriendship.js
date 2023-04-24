function wordsToMarks(string){
    //your code here
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    return string.split('').reduce((ac,cu,i)=> (alphabets.indexOf(cu)+1)  + ac,0)
  }