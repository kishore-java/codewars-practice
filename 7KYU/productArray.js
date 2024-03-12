function productArray(numbers){
    //your code here
      // Calculate the total product of all numbers
      const totalProduct = numbers.reduce((acc, num) => acc * num, 1);
      
      // Create a new array to store the products
      const products = [];
      
      // Calculate the product for each element in the array
      for (let i = 0; i < numbers.length; i++) {
          // Divide the total product by the current number to get the product excluding the current number
          products.push(totalProduct / numbers[i]);
      }
      
      return products;
    
  }