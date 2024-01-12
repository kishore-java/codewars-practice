function defineSuit(card) {
    // good luck
    let obj = {
      '♣' : 'clubs',
  '♦' : 'diamonds',
  '♥' : 'hearts',
  '♠' :'spades'
    }
    return obj[card[card.length - 1]]
  }