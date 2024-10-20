function unique(arr) {
    let unique = [];
    for (let key of arr) {
        if (!unique.includes(key)) {
            unique.push(key);
        }
    }
    return unique;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(strings));

module.exports = unique;
