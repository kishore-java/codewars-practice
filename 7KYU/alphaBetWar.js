function alphabetWar(fight)
{
  let str='wpbs'
  let STR="mqdz"
  
  let obj={
    m:4,
    q:3,
    d:2,
    z:1,
    p:3,
    w:4,
    b:2,
    s:1
  }
  let scoreOne=fight.split('').filter(ele => str.includes(ele) ).reduce((ac,cu)=> obj[cu]+ac,0)
  let scoreTwo=fight.split('').filter(ele => STR.includes(ele) ).reduce((ac,cu)=> obj[cu]+ac,0)
  return scoreOne>scoreTwo?"Left side wins!":scoreTwo>scoreOne?"Right side wins!":"Let's fight again!"
  }