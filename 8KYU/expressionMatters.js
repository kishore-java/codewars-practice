function expressionMatter(a, b, c) {
    const option1 = a + b + c;
      const option2 = a * b * c;
      const option3 = a + b * c;
      const option4 = a * b + c;
      const option5 = (a + b) * c;
      const option6 = a * (b + c);
  
      return Math.max(option1, option2, option3, option4, option5, option6);
  }