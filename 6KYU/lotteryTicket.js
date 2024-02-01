function bingo(ticket, win){

    return ticket.map(ele => checkCharCode(ele)).reduce((a,b) => a+b,0) >= win ?
      'Winner!' : 'Loser!'
    
    
  }
  
  function checkCharCode(arr){
    return arr[0].split('').some(letter => letter.charCodeAt(0) === arr[1]) ? 1 : 0 
  }