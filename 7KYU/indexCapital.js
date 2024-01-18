function capitalize(str,indices){
    const charArray = str.split('');
    
        // Capitalize letters at the given indices
        for (const index of indices) {
            if (index >= 0 && index < charArray.length) {
                charArray[index] = charArray[index].toUpperCase();
            }
        }
    
        // Join the array back into a string
        const result = charArray.join('');
    
        return result;
    };