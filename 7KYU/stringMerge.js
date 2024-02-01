function stringMerge(string1, string2, letter){
    // Add code here :)
    const fIndex = string1.indexOf(letter);
    const sIndex = string2.indexOf(letter)
    return string1.slice(0,fIndex) + string2.slice(sIndex);
  }