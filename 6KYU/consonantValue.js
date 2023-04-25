function solve(s) {
    //   return 0;
      let vowel='aeiou'
      let alpha='abcdefghijklmnopqrstuvwxyz'
     let modStr= s.split('').map(ele => vowel.includes(ele)?" ":ele).join('')
     return Math.max(...modStr.split(' ').map(ele => ele.split('').reduce((ac,cu)=> 1+alpha.indexOf(cu)+ac,0))
      )
    }