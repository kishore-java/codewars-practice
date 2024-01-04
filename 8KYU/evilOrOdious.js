function evil(n) {
    return n.toString(2).split('').filter(ele => ele === '1').length % 2 ?
        "It's Odious!" : "It's Evil!";
  }