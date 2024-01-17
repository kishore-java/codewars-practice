function getOrder(order) {
  
    const menuItems = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
      const cleanedOrder = [];
  
      for (let menuItem of menuItems) {
          const regex = new RegExp(menuItem.toLowerCase(), 'g');
          const occurrences = (order.match(regex) || []).length;
          
          if (occurrences > 0) {
              
              menuItem = new Array(occurrences).fill(menuItem).join(' ')
              cleanedOrder.push(menuItem);
          }
      }
  
      return cleanedOrder.join(" ");
  }