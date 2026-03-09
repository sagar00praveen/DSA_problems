function findMissing(arr) {
    let n = arr.length + 1;

    let totalSum = (n * (n + 1)) / 2;

    let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }

    return totalSum - arrSum;
}

console.log(findMissing([1, 2, 3, 5]));
