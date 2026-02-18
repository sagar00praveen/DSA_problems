/*
  CONCEPT: Sliding Window Technique
  Used for: Subarray or Substring problems (e.g., "maximum sum of contiguous subarray of size 3")

  Instead of recalculating the sum of every possible block of 3 from scratch (O(n*k)),
  we "slide" a window across the array.
  
  Sliding = Add the new element entering the window, Subtract the old element leaving the window.
  Time Complexity drops to O(n)!
*/

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null; // Edge case

    let maxSum = 0;
    let tempSum = 0;

    // 1. Calculate the sum of the very first window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // Set tempSum down as exactly what maxSum is for now
    tempSum = maxSum;

    // 2. Slide the window down the array
    for (let i = num; i < arr.length; i++) {
        // tempSum = previous window sum - element leaving left + element entering right
        tempSum = tempSum - arr[i - num] + arr[i];

        // Update maxSum if the new window is larger
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// Test case
// Look for largest sum of 3 consecutive elements:
// [2, 6, 9] = 17 => maxSum
const sampleArray = [2, 6, 9, 2, 1, 8, 5, 6, 3];
console.log("Max sub-array sum:", maxSubarraySum(sampleArray, 3)); 
