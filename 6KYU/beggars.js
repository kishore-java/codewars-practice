function beggars(values, n) {
    let result = new Array(n).fill(0); // Initialize result array with zeroes for each beggar
    for (let i = 0; i < values.length; i++) {
        result[i % n] += values[i]; // Distribute values among beggars in a cyclic manner
    }
    return result;
}