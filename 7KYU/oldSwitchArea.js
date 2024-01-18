function vowel2index(str) {
    //code me
   str = str.split('').map(ele => 'aeiouAEIOU'.includes(ele) ? '*' : ele).join('')
   return str.split('').map((ele,i) => ele === '*' ? (i+1) : ele).join('')
 }