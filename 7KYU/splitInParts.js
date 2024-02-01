function splitInParts(str, partLength) {
    let result = '';
    for (let i = 0; i < str.length; i += partLength) {
        result += str.substr(i, partLength) + ' ';
    }
    return result.trim();
}

// Example usage:
console.log(splitInParts('supercalifragilisticexpialidocious', 3));
