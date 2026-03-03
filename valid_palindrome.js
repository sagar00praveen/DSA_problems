
function isPalindrome(str) {
    // TODO: Write your code here

    return true; // placeholder
}

// Test Cases
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("abba"));    // true
//method 2

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
