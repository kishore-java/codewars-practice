function fuelPrice(litres, pricePerLitre) {
    let discount = Math.min(Math.floor(litres / 2) * 5, 25) / 100; // Calculate the discount
    let totalPrice = litres * (pricePerLitre - discount); // Calculate the total cost
  
    return Math.round(totalPrice * 100) / 100; // Round to 2 decimal places
  }