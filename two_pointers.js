const sortedArr = [-4, -3, -1, 0, 1, 2, 5];
function sumZeroRefactor(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            // Sum is too big? We need a smaller number.
            // Move right pointer down.
            right--;
        } else {
            // Sum is too small? We need a bigger number.
            // Move left pointer up.
            left++;
        }
    }
    return undefined; // No pair found
}

console.log("Two Pointers:", sumZeroRefactor(sortedArr));

