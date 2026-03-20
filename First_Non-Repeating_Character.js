function firstNonRepeatingChar(str) {
    let count = {};

    // Step 1: Count characters
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: Find first with count 1
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null; // if none found
}

console.log(firstNonRepeatingChar("aabbcde"));
