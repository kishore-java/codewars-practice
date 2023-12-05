function maxDiff(list) {
    if(list.length === 0 || list.length ===1 ) return 0
    let Maximum = Math.max(...list);
    let Minimum = Math.min(...list)
    return Maximum - Minimum
  };