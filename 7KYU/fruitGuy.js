function removeRotten(bagOfFruits){
    if (!bagOfFruits || bagOfFruits.length === 0) {
      return [];
    }
    // ...
    return bagOfFruits.map(ele => ele.startsWith('rotten')?ele.slice(6)[0].toLowerCase() + ele.slice(7) : ele)
  }