function moveZeros(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            index++;
        }
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
