function filterRange(array, a, b) {
    return array.filter(num => (num >= a && num <= b));
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4)); // [3, 1]

module.exports = filterRange;
