function discoverOriginalPrice(salePrice, salePercentage){
    // ...
    let percentage = salePercentage / 100;
      
      // Calculate original price using the formula: original price = sale price / (1 - sale percentage)
      let originalPrice = salePrice / (1 - percentage);
      
      // Round the original price to two decimal places
      originalPrice = Math.round(originalPrice * 100) / 100;
      
      return originalPrice;
  }