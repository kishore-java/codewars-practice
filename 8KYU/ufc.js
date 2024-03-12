var quote = function(winner) {
    // your code here
      // Convert the winner's name to lowercase for case-insensitive comparison
      let lowercaseWinner = winner.toLowerCase();
  
      // Check if the winner is George Saint Pierre
      if (lowercaseWinner.includes("george") && lowercaseWinner.includes("saint") && lowercaseWinner.includes("pierre")) {
          return "I am not impressed by your performance.";
      }
  
      // Check if the winner is Conor McGregor
      if (lowercaseWinner.includes("conor") && lowercaseWinner.includes("mcgregor")) {
          return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
      }
  
      // Default case if the winner is not recognized
      return "Unknown fighter or no winner specified.";
  };