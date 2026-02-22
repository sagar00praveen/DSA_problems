function countOccurrences(arr) {
    const counts = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
    }

    return counts;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 1]));
