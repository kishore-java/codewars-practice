Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
       return this.reduce((count, current) => {
              return current === element ? count + 1 : count;
          }, 0);
      },
      enumerable: false
    
  });