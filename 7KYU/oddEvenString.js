function sortMyString(S) {
    // your code here
  let S1=S.split('').filter((ele,i)=> i%2===0).join('')
  let S2=S.split('').filter((ele,i)=> i%2!==0).join('')
    return `${S1} ${S2}`
}