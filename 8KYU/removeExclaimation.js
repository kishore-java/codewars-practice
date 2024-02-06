let count = 0; // Counter for removed exclamation marks
let result = ''; // Resulting string

for (let i = 0; i < s.length; i++) {
    if (s[i] === '!' && count < n) {
        count++; // Increment count if an exclamation mark is encountered
    } else {
        result += s[i]; // Append character to result if it's not an exclamation mark or if the limit is reached
    }
}

return result;