function high(x){
    let str="abcdefghijklmnopqrstuvwxyz";;
     let array=x.split(' ')
     let scoresArray= array
             .map(ele => ele.split('')
             .reduce((ac,cu)=> (str.indexOf(cu)+1)+ac,0))
        return array[scoresArray.indexOf(Math.max(...scoresArray))]
   }