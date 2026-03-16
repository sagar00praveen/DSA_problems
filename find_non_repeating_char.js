function firstNonRepeating(str) {
    let count = {};

    // Count characters
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Find first non-repeating
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeating("aabbcde"));
