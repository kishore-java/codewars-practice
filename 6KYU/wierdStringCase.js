function toWeirdCase(str){
    //TODO
      // Split the string into words
      const words = str.split(" ");
      
      // Function to manipulate each word
      const manipulateWord = word => {
          let manipulatedWord = "";
          for (let i = 0; i < word.length; i++) {
              if (i % 2 === 0) {
                  manipulatedWord += word[i].toUpperCase();
              } else {
                  manipulatedWord += word[i].toLowerCase();
              }
          }
          return manipulatedWord;
      };
      
      // Manipulate each word and join them back with spaces
      const manipulatedWords = words.map(manipulateWord);
      return manipulatedWords.join(" ");
  }
  
  