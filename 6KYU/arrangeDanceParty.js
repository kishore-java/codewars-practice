function arrangeDanceParty(dancers) {
    // Create an object to map each mother to her children
    const motherToChildren = {};
    
    // Populate the object with mothers and their children
    for (let i = 0; i < dancers.length; i++) {
        const dancer = dancers[i];
        const key = dancer.toUpperCase();
        
        // If the dancer is a mother, initialize her children array
        if (!motherToChildren[key]) {
            motherToChildren[key] = [];
        }
        
        // Add the dancer to the respective mother's children array
        motherToChildren[key].push(dancer);
    }
    
    // Sort the mothers in alphabetical order
    const sortedMothers = Object.keys(motherToChildren).sort();
    
    // Initialize the result string
    let result = '';
    
    // Append mothers and their children to the result string
    for (let i = 0; i < sortedMothers.length; i++) {
        const mother = sortedMothers[i];
        const children = motherToChildren[mother].join('');
        result += mother + children;
    }
    
    return result;
}

// Example usage:
const dancers = "aAbaBb";
console.log(arrangeDanceParty(dancers)); // Output: "AaaBbb"
