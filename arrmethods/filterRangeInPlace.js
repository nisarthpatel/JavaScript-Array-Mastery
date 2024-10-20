function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

module.exports = filterRangeInPlace;
