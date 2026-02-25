/*
  CHALLENGE: Valid Palindrome
  
  A palindrome is a string that reads the same forward and backward.
  Example: "madam" -> true
  Example: "racecar" -> true
  Example: "hello" -> false
  
  Your Task:
  Write a function `isPalindrome(str)` that returns true if valid, false if not.
  
   Constraints:
  - Use the TWO POINTERS technique.
  - O(n) Time Complexity.
  - O(1) Space Complexity (No creating new strings).

  Hint:
  - Pointer 1 at start (0).
  - Pointer 2 at end (length - 1).
  - Loop while left < right.
  - If characters don't match -> return false immediately.
  - If match, move pointers closer -> left++, right--.
*/

function isPalindrome(str) {
    // TODO: Write your code here

    return true; // placeholder
}

// Test Cases
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("abba"));    // true
