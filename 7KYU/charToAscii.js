/*Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.*/

function charToAscii(string){
    //your code here
      string=string.replace(/[^a-zA-Z ]/g, "")
    let obj={};
    let arr= Array.from(new Set(string.split('')))
     arr= arr.filter(ele => ele !==' ')
    if(arr.length===0) return null
      arr.forEach((ele) =>{
       
              obj[ele]=ele.charCodeAt(0)
       })
    
    return obj
  }