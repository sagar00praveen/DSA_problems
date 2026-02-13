

const numbers = [1, 2, 1, 3, 2, 4, 1, 5, 2];

console.log("--- Solution 1: O(n^2) ---");
function countNaive(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        result[arr[i]] = count;
    }
    return result;
}
console.log(countNaive(numbers));



console.log("\n--- Solution 2: O(n) ---");
function countEfficient(arr) {
    const counts = {}; // Use an object map

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        // If it exists, add 1. If not, set to 1.
        counts[num] = (counts[num] || 0) + 1;
    }
    return counts;
}
console.log(countEfficient(numbers));

