function switcher(x){
    const obj = {
        'z': 1,
        'y': 2,
        'x': 3,
        'w': 4,
        'v': 5,
        'u': 6,
        't': 7,
        's': 8,
        'r': 9,
        'q': 10,
        'p': 11,
        'o': 12,
        'n': 13,
        'm': 14,
        'l': 15,
        'k': 16,
        'j': 17,
        'i': 18,
        'h': 19,
        'g': 20,
        'f': 21,
        'e': 22,
        'd': 23,
        'c': 24,
        'b': 25,
        'a': 26,
      '!':27,
      '?':28,
      ' ':29
    };
      const reversedObject = {};
    
        // Iterate through the original object
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                reversedObject[obj[key]] = key;
            }
        }
    
      return x.map(ele => reversedObject[ele]).join('');
    }