function countDevelopers(list) {
    // your awesome code here :)
    return list.filter(ele => ele.continent==='Europe' && ele.language==='JavaScript').length
  }